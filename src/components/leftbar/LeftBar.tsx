import { Link } from 'react-router-dom'
import styles from './style.module.css'



function LeftBar() {
    return (
        <div className={styles['container']}>
            <div className={styles['menu']}>
                <Link to="/">
                    <a>
                        <div className={styles['menu-items']}>
                            <div className={styles['m-icon']}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 12 12"><path fill="#707070" fill-rule="evenodd" d="M9.75 0h.75c.825 0 1.5.675 1.5 1.5v9c0 .825-.675 1.5-1.5 1.5h-9A1.5 1.5 0 010 10.5v-9A1.5 1.5 0 011.5 0h8.25zM1.5 10.5h9V3.75h-9v6.75zm2.25-3a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div className={styles['txt']}>Calendar</div>
                        </div>
                    </a>
                </Link>

                <Link to="/client">
                    <a>
                        <div className={styles['menu-items']}>
                            <div className={styles['m-icon']}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" fill="none" viewBox="0 0 18 12"><path fill="#707070" d="M6 7.5c-2.006 0-6 1.071-6 4.5h12c0-3.429-3.994-4.5-6-4.5zM6 6c1.654 0 3-1.346 3-3S7.654 0 6 0 3 1.346 3 3s1.346 3 3 3zm5.143 1.551c.994.72 2.571 1.663 2.571 4.449h3.429c0-3-3.892-4.217-6-4.449zm0-1.551c1.654 0 3-1.346 3-3s-1.346-3-3-3c-.463 0-.892.111-1.286.3.54.763.857 1.697.857 2.7a4.664 4.664 0 01-.857 2.7c.394.189.823.3 1.286.3z"></path></svg>
                            </div>
                            <div className={styles['txt']}>Clients</div>
                        </div>
                    </a>
                </Link>

                <a href="http://">
                    <div className={styles['menu-items']}>
                        <div className={styles['m-icon']}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="none" viewBox="0 0 16 12"><path fill="#707070" fill-rule="evenodd" d="M1.714 0h12c.952 0 1.715.763 1.715 1.714v8.572c0 .951-.763 1.714-1.715 1.714h-12A1.708 1.708 0 010 10.286l.005-5.143H12V3.429H.007l.002-1.715A1.7 1.7 0 011.714 0z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div className={styles['txt']}>Billing</div>
                    </div>
                </a>
                <a href="http://">
                    <div className={styles['menu-items']}>
                        <div className={styles['m-icon']}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#707070" d="M7.46.783l-4.667 2.09c-.48.216-.793.7-.793 1.231v3.16c0 3.732 2.56 7.222 6 8.07 3.44-.848 6-4.338 6-8.07v-3.16c0-.53-.313-1.015-.793-1.23L8.54.783a1.315 1.315 0 00-1.08 0zM6.193 10.822L4.467 9.08a.674.674 0 010-.948.66.66 0 01.94 0l1.26 1.264 3.92-3.954a.66.66 0 01.94 0c.26.263.26.686 0 .948l-4.394 4.432a.66.66 0 01-.94 0z"></path></svg>
                        </div>
                        <div className={styles['txt']}>Insurance</div>
                    </div>
                </a>
                <a href="http://">
                    <div className={styles['menu-items']}>
                        <div className={styles['m-icon']}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 12 12"><path fill="#707070" d="M10.667 0H1.333C.6 0 0 .6 0 1.333v9.334C0 11.4.6 12 1.333 12h9.334C11.4 12 12 11.4 12 10.667V1.333C12 .6 11.4 0 10.667 0zM4 9.333H2.667V4.667H4v4.666zm2.667 0H5.333V2.667h1.334v6.666zm2.666 0H8V6.667h1.333v2.666z"></path></svg>
                        </div>
                        <div className={styles['txt']}>Analytics</div>
                    </div>
                </a>
                <a href="http://">
                    <div className={styles['menu-items']}>
                        <div className={styles['m-icon']}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" fill="none" viewBox="0 0 18 10"><path fill="#707070" d="M0 6h2V4H0v2zm0 4h2V8H0v2zm0-8h2V0H0v2zm4 4h14V4H4v2zm0 4h14V8H4v2zM4 0v2h14V0H4zM0 6h2V4H0v2zm0 4h2V8H0v2zm0-8h2V0H0v2zm4 4h14V4H4v2zm0 4h14V8H4v2zM4 0v2h14V0H4z"></path></svg>
                        </div>
                        <div className={styles['txt']}>Account Activity</div>
                    </div>
                </a>
                <a href="http://">
                    <div className={styles['menu-items']}>
                        <div className={styles['m-icon']}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="none" viewBox="0 0 12 16"><path fill="#707070" d="M6 15.857a1.72 1.72 0 001.714-1.714H4.286c0 .943.763 1.714 1.714 1.714zm5.143-5.143V7.286c0-2.632-1.406-4.835-3.857-5.417v-.583a1.285 1.285 0 10-2.572 0v.583C2.254 2.45.857 4.646.857 7.286v3.428L0 12.43v.857h12v-.857l-.857-1.715z"></path></svg>
                        </div>
                        <div className={styles['txt']}>Reminders</div>
                    </div>
                </a>
                <a href="http://">
                    <div className={styles['menu-items']}>
                        <div className={styles['m-icon']}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#707070" d="M9.601 15.934a.724.724 0 00.362-.309c.067-.103.07-.153.086-.969l.016-.86.106-.212c.144-.284.346-.468.768-.703.43-.24.634-.3.986-.281.256.012.272.019.688.244.852.459.817.443 1.021.443.218 0 .42-.081.551-.215.045-.05.397-.616.781-1.26.698-1.169.698-1.172.71-1.381.01-.165 0-.237-.054-.347-.096-.194-.182-.26-.755-.578-.586-.325-.733-.453-.884-.772-.093-.194-.105-.253-.118-.562-.023-.538.118-.935.416-1.185.064-.053.423-.26.797-.456.548-.287.698-.384.768-.478a.688.688 0 00.15-.503c-.012-.14-.101-.319-.694-1.366-.374-.659-.717-1.237-.765-1.287-.147-.153-.333-.219-.576-.203-.202.012-.253.031-.903.375-.797.419-.934.462-1.309.4-.24-.038-.359-.09-.861-.378-.368-.206-.583-.413-.72-.682l-.103-.206-.016-.86c-.016-.815-.02-.865-.086-.968A.723.723 0 009.6.065C9.463.004 9.396 0 8.02 0c-1 0-1.473.013-1.56.038a.805.805 0 00-.252.143c-.237.197-.237.2-.256 1.163l-.016.86-.106.212c-.144.284-.346.468-.771.706-.41.228-.593.284-.916.284-.288-.003-.365-.03-.957-.356-.589-.319-.627-.334-.845-.334-.195 0-.4.084-.525.212-.045.05-.397.616-.781 1.26C.344 5.347.337 5.363.325 5.563c-.026.4.082.528.78.912.295.16.59.347.663.416.07.069.18.228.24.356.106.212.115.26.128.578.02.525-.105.903-.393 1.175-.052.05-.385.24-.737.428-.352.185-.688.37-.742.41a.786.786 0 00-.19.24.537.537 0 00-.07.353c.013.17.064.272.695 1.385.375.66.717 1.237.765 1.287.147.153.333.219.576.203.205-.009.25-.03.903-.375.79-.418.935-.462 1.319-.4.227.038.346.09.842.372.368.206.653.488.755.74.067.173.074.244.093 1.029.02.944.02.953.256 1.147a.8.8 0 00.253.143c.086.025.56.038 1.559.038 1.376 0 1.443-.003 1.581-.066zm-2.177-5.487a2.549 2.549 0 01-1.956-1.838 2.702 2.702 0 010-1.218c.31-1.14 1.32-1.897 2.533-1.897.7 0 1.312.234 1.802.69.348.322.57.682.713 1.15.113.37.119.9.017 1.275-.372 1.35-1.681 2.126-3.109 1.838z"></path></svg>
                        </div>
                        <div className={styles['txt']}>Settings</div>
                    </div>
                </a>
            </div>

            <hr style={{ opacity: 0.5, margin: "5px 0 0 0" }} />

            <div className={styles['recent-view-container']}>
                <div className={styles['recent-view-container-inner']}>
                    <div className={styles['m-icon']} style={{ padding: "5px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="none" viewBox="0 0 16 14"><path fill="#384349" d="M4.444 7a3.555 3.555 0 117.111 0 3.555 3.555 0 01-7.11 0zM8 9.222a2.222 2.222 0 100-4.444h-.08c.06.142.08.292.08.444A1.78 1.78 0 016.222 7a1.12 1.12 0 01-.444-.08v.055c0 1.253.994 2.247 2.222 2.247zM2.65 3.017C3.959 1.8 5.757.777 8 .777c2.244 0 4.042 1.024 5.35 2.24 1.3 1.205 2.17 2.625 2.58 3.641a.884.884 0 010 .684c-.41.991-1.28 2.41-2.58 3.641-1.308 1.217-3.106 2.24-5.35 2.24-2.244 0-4.042-1.023-5.35-2.24C1.35 9.753.483 8.333.069 7.342a.888.888 0 010-.684c.414-1.016 1.283-2.436 2.583-3.641zM8 2.11c-1.811 0-3.3.822-4.442 1.88-1.07.995-1.807 2.15-2.185 3.009a9.874 9.874 0 002.185 3.008c1.142 1.059 2.63 1.88 4.442 1.88 1.811 0 3.3-.821 4.442-1.88 1.07-.994 1.783-2.175 2.186-3.008a10.023 10.023 0 00-2.186-3.008C11.3 2.933 9.812 2.112 8 2.112z"></path></svg>
                    </div>
                    <span
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "13px"
                        }}
                    >
                        Recently Viewed
                    </span>
                    <div
                        style={{
                            margin: "3px 0 0 15px",
                            // padding: "5px 0 5pxpx 15px",
                            height: "10px",
                            width: "10px",
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" fill="none" viewBox="0 0 8 12"><path fill="#707070" d="M1 .71a.996.996 0 000 1.41L4.88 6 1 9.88a.996.996 0 101.41 1.41L7 6.7a.996.996 0 000-1.41L2.41.7C2.03.32 1.39.32 1 .71z"></path></svg>
                    </div>
                </div>
            </div>

            <div className={styles['extra']}>
                <div className={styles['extra-download-app']}>
                    <div className={styles['m-icon']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" fill="none" viewBox="0 0 14 22"><path fill="#333" fill-rule="evenodd" d="M1.99 0l10 .01c1.1 0 2 .89 2 1.99v18c0 1.1-.9 2-2 2h-10C.89 22 0 21.1 0 20V2C0 .9.89 0 1.99 0zm0 18h10V4h-10v14z" clip-rule="evenodd"></path></svg>
                    </div>
                    <span>Download free app</span>
                </div>
                <div className={styles['extra-privacy']}>
                    <div className={styles['m-icon']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" fill="none" viewBox="0 0 11 13"><path fill="#444" fill-rule="evenodd" d="M8.847 4.333h-.632V3.095C8.215 1.387 6.8 0 5.055 0c-1.15 0-2.159.604-2.711 1.506l1.077.646a1.9 1.9 0 011.635-.914c1.049 0 1.895.83 1.895 1.857v1.238H1.264C.569 4.333 0 4.89 0 5.571v6.19C0 12.444.569 13 1.264 13h7.583c.695 0 1.264-.557 1.264-1.238v-6.19c0-.682-.569-1.239-1.264-1.239zM6.32 8.667a1.25 1.25 0 01-1.263 1.238 1.251 1.251 0 01-1.264-1.238c0-.684.566-1.238 1.264-1.238A1.25 1.25 0 016.32 8.667z" clip-rule="evenodd"></path></svg>
                    </div>
                    <span>Privacy Off</span>
                </div>
            </div>
        </div>
    )
}

export default LeftBar