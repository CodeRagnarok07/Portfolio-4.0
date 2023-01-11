import './styles.scss'
import '@styles/tailwind.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className='mb-4'>{children}
      <hr  className='my-4'/>
      </body>
    </html>
  )
}
