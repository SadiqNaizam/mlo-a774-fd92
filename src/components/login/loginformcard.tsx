"use client";

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Moon, Sun } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import FooterLinks from './FooterLinks';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

type LoginFormValues = z.infer<typeof formSchema>;

interface LoginFormCardProps {
    className?: string;
}

const LoginFormCard: React.FC<LoginFormCardProps> = ({ className }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    // In a real application, you would make an API call here.
    console.log('Login attempt with:', data);
    // For demonstration, we'll just show an alert.
    alert(`Simulating login for: ${data.email}`);
  };

  return (
    <Card className={cn("w-[24rem] bg-card text-card-foreground", className)}>
      <CardHeader className="relative">
        <CardTitle className="text-center text-2xl font-bold">Welcome</CardTitle>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="absolute top-6 right-6"
        >
          {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="-mt-2 flex justify-end">
              <Button 
                type="button" 
                variant="link" 
                className="h-auto p-0 text-sm font-normal text-muted-foreground hover:text-primary hover:no-underline"
              >
                Forgot Password
              </Button>
            </div>
            
            <Button type="submit" className="w-full">
              Login
            </Button>

            <FooterLinks />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginFormCard;