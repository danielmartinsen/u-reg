import { useState, useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Nav from './nav'

const siteTitle = 'U-reg Admin'

export default function Layout({ children }) {
  const [login, setLogin] = useState()

  useEffect(() => {
    setLogin(localStorage.getItem('Login'))

    if (login === null || login == 'false') {
      Router.push('/admin/login')
    }
  })

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width' />
      </Head>

      {login == 'true' && (
        <>
          <Nav />
          <div className='container'>{children}</div>
        </>
      )}

      <style jsx global>
        {`
          body,
          html {
            background-color: #f1f2fa;
            color: #0f152d;
          }
        `}
      </style>
    </>
  )
}
