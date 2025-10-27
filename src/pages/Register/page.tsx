import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Lock, Eye, EyeOff, User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
    if (!formData.acceptTerms) {
      alert('Você precisa aceitar os termos e condições!');
      return;
    }
    console.log('Sign up attempt:', formData);
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden py-16">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      {/* Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="signup-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#signup-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="text-center mb-8">
            <a href="#home" className="inline-flex items-center gap-3 group mb-6">
              <div className="relative">
                <svg 
                  width="48" 
                  height="48" 
                  viewBox="0 0 48 48" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:scale-105"
                >
                  <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" opacity="0.3" className="text-accent"/>
                  <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" opacity="0.6" className="text-accent"/>
                  <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" className="text-accent"/>
                  <circle cx="24" cy="24" r="4" fill="currentColor" className="text-accent"/>
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold tracking-tight text-primary">
                  AUREA
                </span>
                <span className="text-sm font-light tracking-widest uppercase text-muted-foreground">
                  Studio
                </span>
              </div>
            </a>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Crie sua conta
            </h1>
            <p className="text-foreground/70">
              Junte-se a nós e transforme seus projetos
            </p>
          </div>

          {/* Sign Up Card */}
          <div className="bg-card rounded-2xl shadow-2xl p-8">
            <div className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                  Nome Completo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                    placeholder="Seu nome completo"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  E-mail
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                  Telefone
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                    placeholder="(84) 99999-9999"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-card-foreground mb-2">
                  Senha
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-12 pr-12 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-card-foreground mb-2">
                  Confirmar Senha
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-12 pr-12 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="w-4 h-4 mt-1 rounded border-border text-primary focus:ring-2 focus:ring-ring cursor-pointer"
                  />
                  <span className="text-sm text-card-foreground/70 group-hover:text-card-foreground transition-colors leading-relaxed">
                    Eu aceito os{' '}
                    <a href="#terms" className="text-primary hover:text-accent font-medium underline">
                      Termos e Condições
                    </a>
                    {' '}e a{' '}
                    <a href="#privacy" className="text-primary hover:text-accent font-medium underline">
                      Política de Privacidade
                    </a>
                  </span>
                </label>
              </div>

              {/* Sign Up Button */}
              <Button
                onClick={handleSubmit}
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              >
                Criar Conta
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-card text-muted-foreground">ou cadastre-se com</span>
                </div>
              </div>

              {/* Social Sign Up */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-3 px-4 bg-background border border-border rounded-lg hover:bg-muted transition-colors group">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-sm font-medium text-foreground">Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-3 px-4 bg-background border border-border rounded-lg hover:bg-muted transition-colors group">
                  <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-sm font-medium text-foreground">Facebook</span>
                </button>
              </div>
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-foreground/70">
              Já tem uma conta?{' '}
              <Link to="/Login">
              <a 
                href="#login" 
                className="text-primary hover:text-accent transition-colors font-semibold"
              >
                Fazer login
              </a></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}