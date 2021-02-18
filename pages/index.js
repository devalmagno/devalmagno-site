import Head from 'next/head';

import SendMessageButton from '../components/sendMessageButton';

import homecss from '../styles/home.module.css';

function HomePage() {
    const goToMyProjects = () => {
        window.alert('Em desenvolvimento...');
    }

    return (
        <div>
            <Head>
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

                <title>Lúcio Magno</title>
            </Head>

            <header className={homecss.header}>
                <span>
                    Lúcio Magno
                </span>

                <button className={homecss.githubMobile}>
                    <a target="_blank" href="https://github.com/devalmagno">
                        <img src="/images/icons/github.svg" />
                        {/* Veja meu GitHub */}
                    </a>
                </button>

                <div className={homecss.buttonsDesktop}>
                    <a className={homecss.githubDesktop} target="_blank" href="https://github.com/devalmagno">
                        Acesse meu GitHub
                    </a>
                    <SendMessageButton />
                </div>
            </header>

            <main>
                <div className={homecss.information}>
                    <div>
                        <h1>Freelance full-stack <br />
                            <a
                                className={homecss.javascriptHref}
                                target="_blank"
                                href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                                rel="noreferrer"
                            >
                                javascript
                            </a>
                            <br />
                            developer.
                        </h1>

                        <p>
                            Escolhi Javascript principalmente por ser uma linguagem de programação mais rápida que as outras, também por me abrir um leque de possibilidades, como front-end, back-end e mobile, além de suas várias bibliotecas. Por isso a considero a minha linguagem príncipal para desenvolvimento.
                        </p>

                        <div>
                            <button className={homecss.seeMyProjects} onClick={goToMyProjects}>
                                <a href="#">
                                    Veja meus projetos
                                </a>
                            </button>
                        </div>
                    </div>
                    <img className={homecss.profileImage} src="/images/lucio-magno.svg" />
                </div>

                <div>
                    <div className={homecss.stackDesktop}>
                        <a target="_blank" href="https://pt-br.reactjs.org/">
                            <img src="https://raw.githubusercontent.com/devalmagno/devalmagno-site/ff1b7fe1a8a7d312b4c49bcef6321ba2e9b2016d/public/images/icons/Reactjs-large.svg" alt="Reactjs" />
                        </a>
                        <a target="_blank" href="https://nextjs.org/">
                            <img src="/images/icons/nextjs-large.svg" alt="Nextjs" />
                        </a>
                        <a target="_blank" href="https://nodejs.org/en/">
                            <img src="/images/icons/nodejs-large.svg" alt="NodeJs" />
                        </a>
                        <a target="_blank" href="https://expressjs.com/pt-br/">
                            <img src="https://raw.githubusercontent.com/devalmagno/devalmagno-site/b48c2263a6eb430145355387e243e9fbb1fb0301/public/images/icons/Express-large.svg" alt="Expressjs" />
                        </a>
                        <a target="_blank" href="https://www.typescriptlang.org/">
                            <img src="https://raw.githubusercontent.com/devalmagno/devalmagno-site/b48c2263a6eb430145355387e243e9fbb1fb0301/public/images/icons/Typescript-large.svg" alt="Typescript" />
                        </a>
                    </div>

                    <div className={homecss.stackMobile}>
                        <a target="_blank" href="https://pt-br.reactjs.org/">
                            <img src="/images/icons/reactjs-small.svg" alt="Reactjs" />
                        </a>
                        <a target="_blank" href="https://nextjs.org/">
                            <img src="/images/icons/nextjs-small.svg" alt="Nextjs" />
                        </a>
                        <a target="_blank" href="https://nodejs.org/en/">
                            <img src="/images/icons/nodejs-small.svg" alt="Nodejs" />
                        </a>
                        <a target="_blank" href="https://www.typescriptlang.org/">
                            <img src="https://raw.githubusercontent.com/devalmagno/devalmagno-site/b48c2263a6eb430145355387e243e9fbb1fb0301/public/images/icons/Typescript-small.svg" alt="Typescript" />
                        </a>
                    </div>
                </div>
            </main>

            <footer className={homecss.footer}>
                <h2>
                    <img src="/images/icons/emoji.svg" />
                    Vamos trabalhar juntos?
                </h2>
                <p>
                    Deseja me contratar para seu projeto? Você pode entrar em contanto rapidamente apertando o botão abaixo.
                </p>
                <SendMessageButton />
            </footer>
        </div>
    );
}

export default HomePage;