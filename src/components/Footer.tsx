import { Rocketseat } from "./Rocketseat";

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-gray-500 py-6 mx-6">
      <div className="flex items-center gap-6">
        <Rocketseat/>
        <span>Rocketseat - Todos os direitos reservados</span>
      </div>
      <a href="#">
        Políticas de privacidade
      </a>
    </footer>
  )
}