'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const loginData = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error, data } = await supabase.auth.signInWithPassword(loginData)

    if(error){
        redirect("/auth/error")
    }

    revalidatePath("/dashboard/user", "layout")
    redirect("/dashboard/user")
}

export async function logout() {
    const supabase = createClient()

    const { error } = await supabase.auth.signOut()

    if (error) {
        redirect("/auth/error")
    }

    revalidatePath("/dashboard/user", "layout")
    redirect("/auth/login")
}

export async function signup(formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const signUpData = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error, data } = await supabase.auth.signUp(signUpData)

    return {
        error, 
        data
    }
}