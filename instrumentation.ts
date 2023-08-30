import { registerOTel } from '@vercel/otel'

// TODO : Finalize the setup by adding collector URL and service name
// Check https://opentelemetry.io/docs/collector/getting-started/ for more details

export function register() {
  registerOTel('next-app')
}
