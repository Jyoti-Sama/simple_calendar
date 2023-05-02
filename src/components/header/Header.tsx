import styles from './style.module.css'

function Header() {
  return (
    <div className={styles['header-container-upper']}>

      <div className={styles['header-container']}>

        <div className={styles['left']}>

          <div className={styles['left-logo']}>
            <span>Simple</span>
            <span>Calendar</span>
          </div>

          <div className={styles['left-search']}>
            <input
              type="text"
              name='keywords'
              placeholder='Search clients'
            />
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="icon-search"><path d="M11.433 6.889c0 2.748-2.159 4.889-4.716 4.889C4.159 11.778 2 9.637 2 6.888 2 4.142 4.16 2 6.717 2c2.557 0 4.716 2.14 4.716 4.889zm.716 4.052a6.976 6.976 0 001.284-4.052C13.433 3.084 10.426 0 6.717 0 3.007 0 0 3.084 0 6.889c0 3.804 3.007 6.889 6.717 6.889 1.52 0 2.923-.518 4.048-1.392l3.23 3.312a1 1 0 001.432-1.396l-3.278-3.361z" clip-rule="evenodd"></path></svg>
            </span>
          </div>

          <div className={styles['left-stock']}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"></path></svg>
            </div>
            <div>
              <div>{"Apr"} income</div>
              <div>{"$100.00"}</div>
            </div>
          </div>
        </div>

        <div className={styles['right']}>
          <div className={styles['right-cal']}>

            <div style={{ fontSize: "16px" }}>+</div>
            <div>Create</div>

          </div>
          <div className={styles['right-cal']}>

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#FFF" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm2 4h10v2H7zm0 4h7v2H7z"></path></svg>
            </div>
            <div>Request</div>

          </div>
          <div className={styles['right-cal']}>
            <div>
              M
            </div>
            <div>Message</div>
          </div>
          <div className={styles['right-plan']}>
            <button>Activate plan</button>
          </div>
          <div className={styles['right-user']}>
            <div>{'GS'}</div>
          </div>
        </div>

      </div>

    </div >
  )
}

export default Header