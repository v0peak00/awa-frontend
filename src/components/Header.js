import React from 'react'
import styles from './Header.module.css';

export default function Header() {
    return (
        <header>
            <div className={styles.container}>
                <a href="">Restaurants</a>
                <input 
                    className={styles.search}
                    type='text' />
                <div className={styles.loginButtons}>
                    <a href="">Login</a>
                    <a href="">Sign up</a>
                </div>
            </div>
        </header>
    )
}
