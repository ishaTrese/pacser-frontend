import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Register() {
  const navigate = useNavigate()
  const { register } = useAuth()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (password !== passwordConfirmation) {
      setError('Passwords do not match.')
      return
    }

    setIsSubmitting(true)

    try {
      await register(firstName, lastName, email, password, passwordConfirmation)
      navigate('/')
    } catch (submitError) {
      setError(submitError?.response?.data?.message || 'Unable to register. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0d1117] px-4 py-8">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-2">
        <section className="hidden justify-center lg:flex">
          <div className="flex h-80 w-80 items-center justify-center rounded-xl border border-slate-300 bg-white shadow-xl">
            <img src="/chq-logo.png" alt="Company logo" className="h-72 w-72 object-contain" />
          </div>
        </section>

        <section className="w-full max-w-md rounded-2xl border border-[#EAB308] bg-[#1a2235] p-6 shadow-2xl lg:justify-self-start">
        <h1 className="mb-1 text-center text-3xl font-semibold text-white">Create Account</h1>
        <p className="mb-6 text-center text-sm text-slate-300">Join and start managing your account</p>

        {error ? (
          <p className="mb-4 rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">
            {error}
          </p>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-slate-200">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
                autoComplete="given-name"
                className="w-full rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-2 text-sm text-white outline-none ring-[#EAB308] transition focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-slate-200">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
                autoComplete="family-name"
                className="w-full rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-2 text-sm text-white outline-none ring-[#EAB308] transition focus:ring-2"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
              className="w-full rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-2 text-sm text-white outline-none ring-[#EAB308] transition focus:ring-2"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-200">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="new-password"
                className="w-full rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-2 pr-16 text-sm text-white outline-none ring-[#EAB308] transition focus:ring-2"
              />
              <button
                type="button"
                onClick={() => setShowPassword((previous) => !previous)}
                className="absolute inset-y-0 right-2 my-auto h-fit text-xs font-medium text-[#EAB308] hover:opacity-80"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="passwordConfirmation" className="mb-1 block text-sm font-medium text-slate-200">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="passwordConfirmation"
                type={showPasswordConfirmation ? 'text' : 'password'}
                value={passwordConfirmation}
                onChange={(event) => setPasswordConfirmation(event.target.value)}
                required
                autoComplete="new-password"
                className="w-full rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-2 pr-16 text-sm text-white outline-none ring-[#EAB308] transition focus:ring-2"
              />
              <button
                type="button"
                onClick={() => setShowPasswordConfirmation((previous) => !previous)}
                className="absolute inset-y-0 right-2 my-auto h-fit text-xs font-medium text-[#EAB308] hover:opacity-80"
              >
                {showPasswordConfirmation ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-[#EAB308] px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-slate-600" />
          <span className="text-xs uppercase tracking-widest text-slate-400">or</span>
          <span className="h-px flex-1 bg-slate-600" />
        </div>

        <button
          type="button"
          className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-slate-300">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-[#EAB308] hover:underline">
            Login
          </Link>
        </p>
        </section>
      </div>
    </main>
  )
}

export default Register
