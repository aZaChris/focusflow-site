import { brand } from '../config/brand'

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 px-6 py-10 text-center text-sm text-neutral-400">
      <p>
        {brand.name} &middot; {new Date().getFullYear()}
      </p>
      <a
        href={brand.repoHref}
        className="mt-1 inline-block underline decoration-neutral-300 underline-offset-2 hover:text-neutral-600"
      >
        {brand.repoHref.replace('https://', '')}
      </a>
    </footer>
  )
}
