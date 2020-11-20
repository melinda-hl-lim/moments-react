import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

function SignIn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Sign In to Moments
          </h2>
        </div>

        <form className="mt-8" action="#">
          <input type="hidden" name="remember" value="true" />
          <Input name="Email" type="email" required="true" position="first" />
          <Input name="Password" type="password" required="true" position="last" />

          <Button text="Sign In" linkTo="/home" />
        </form>
      </div>
    </div>
  );
}

export default SignIn;
