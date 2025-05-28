import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react'

function Login() {
  return (
    <main className="bg-gray-200">
      <div className=" p-8 flex items-center justify-center min-h-screen ">
        <div className="border p-10 rounded-3xl w-1/3 bg-white shadow-">
          <p className="text-center mb-7 text-5xl">Register</p>
          <div className="flex flex-col gap-4">
                     <Input placeholder="username/email" type="text" />
            <Input placeholder="password" type="text" />
            <Button className="hover:bg-gray-500 cursor-pointer">Submit</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login