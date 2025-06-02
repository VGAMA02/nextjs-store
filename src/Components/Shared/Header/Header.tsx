import Link from 'next/link'
import styles from './Header.module.css'
import { cookies } from 'next/headers'
import { validateAccessToken } from 'app/utils/auth/validateAccessToken'
export const Header =  async() => {

  const customer = await validateAccessToken();

  if(customer?.firstName){
    return (
        <header>
          <nav>
            <ul className={styles.Header__list}>
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/store">
                  Store
                </Link>
              </li>
              <li>
                <Link href="/test">
                  Test
                </Link>
              </li>
            </ul>
            <p className={styles.Header__list}>Hola {customer.firstName}</p>
          </nav>
        </header>)
  }
  else{
    return(<Link href={"/login"} className={styles.Header__list}>login</Link>);
  }

  
}