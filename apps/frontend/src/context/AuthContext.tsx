'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  role: 'customer' | 'admin';
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string, phone?: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<Omit<User, 'id' | 'role' | 'createdAt'>>) => Promise<boolean>;
  loginWithGoogle: () => Promise<boolean>;
  loginWithFacebook: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// In-memory user database (in a real app, use a proper backend)
const usersDatabase: Record<string, User> = {};

// Helper function to hash password (simple hash for demo)
const hashPassword = (password: string): string => {
  // Simple hash - in production use bcrypt or similar
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString();
};

// Generate a simple ID
const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = () => {
      const savedUser = localStorage.getItem('paxvision-user');
      if (savedUser) {
        try {
          const userData = JSON.parse(savedUser);
          // Verify user exists in database
          if (usersDatabase[userData.email]) {
            setUser(userData);
          }
        } catch (e) {
          console.error('Failed to load user', e);
        }
      }
      setIsLoading(false);
    };

    loadUser();
  }, []);

  // Save user to localStorage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('paxvision-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('paxvision-user');
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      const user = usersDatabase[email.toLowerCase()];
      if (!user) {
        setError('Користувача з такою електронною адресою не існує');
        setIsLoading(false);
        return false;
      }

      // Check password
      const hashedPassword = hashPassword(password);
      if (user.id !== hashedPassword) {
        setError('Невірний пароль');
        setIsLoading(false);
        return false;
      }

      setUser(user);
      setIsLoading(false);
      return true;
    } catch (e) {
      setError('Сталася помилка при вході');
      setIsLoading(false);
      return false;
    }
  };

  // Social login methods (simulated for demo)
  const loginWithGoogle = async (): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate Google OAuth
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Create or get user with Google
      const email = `user_${Math.random().toString(36).substr(2, 8)}@gmail.com`;
      const name = 'Google User';
      
      if (!usersDatabase[email]) {
        usersDatabase[email] = {
          id: hashPassword(email),
          email,
          name,
          role: 'customer',
          createdAt: new Date().toISOString()
        };
      }
      
      setUser(usersDatabase[email]);
      setIsLoading(false);
      return true;
    } catch (e) {
      setError('Не вдалося увійти через Google');
      setIsLoading(false);
      return false;
    }
  };

  const loginWithFacebook = async (): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate Facebook OAuth
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const email = `user_${Math.random().toString(36).substr(2, 8)}@facebook.com`;
      const name = 'Facebook User';
      
      if (!usersDatabase[email]) {
        usersDatabase[email] = {
          id: hashPassword(email),
          email,
          name,
          role: 'customer',
          createdAt: new Date().toISOString()
        };
      }
      
      setUser(usersDatabase[email]);
      setIsLoading(false);
      return true;
    } catch (e) {
      setError('Не вдалося увійти через Facebook');
      setIsLoading(false);
      return false;
    }
  };

  const register = async (email: string, password: string, name: string, phone?: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      const emailLower = email.toLowerCase();
      
      // Check if user already exists
      if (usersDatabase[emailLower]) {
        setError('Користувач з такою електронною адресою вже існує');
        setIsLoading(false);
        return false;
      }

      // Validate inputs
      if (!email || !password || !name) {
        setError('Будь ласка, заповніть всі обов\'язкові поля');
        setIsLoading(false);
        return false;
      }

      if (password.length < 6) {
        setError('Пароль повинен містити щонайменше 6 символів');
        setIsLoading(false);
        return false;
      }

      // Create new user
      const userId = generateId();
      const hashedPassword = hashPassword(password);
      
      const newUser: User = {
        id: userId,
        email: emailLower,
        name,
        phone,
        role: 'customer',
        createdAt: new Date().toISOString()
      };

      // Store user (using email as key and hashed password as ID for simple auth)
      usersDatabase[emailLower] = {
        ...newUser,
        id: hashedPassword // Store hashed password as ID for verification
      };

      setUser(newUser);
      setIsLoading(false);
      return true;
    } catch (e) {
      setError('Сталася помилка при реєстрації');
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = async (data: Partial<Omit<User, 'id' | 'role' | 'createdAt'>>): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      if (!user) {
        setError('Користувач не авторизований');
        setIsLoading(false);
        return false;
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300));

      // Update user data
      const updatedUser = {
        ...user,
        ...data
      };

      // Update in database
      if (usersDatabase[user.email]) {
        usersDatabase[user.email] = {
          ...usersDatabase[user.email],
          ...data,
          id: usersDatabase[user.email].id // Keep the hashed password ID
        };
      }

      setUser(updatedUser);
      setIsLoading(false);
      return true;
    } catch (e) {
      setError('Не вдалося оновити профіль');
      setIsLoading(false);
      return false;
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    login,
    register,
    logout,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
