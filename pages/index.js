import Image from 'next/image';
import Head from 'next/head';

import SendMessageButton from '../components/sendMessageButton';

import homecss from '../styles/home.module.css';

function HomePage() {
    return (
        <div>
            <Head>
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
                        <h1>Freelance full-stack
                            <span> javascript </span>
                            developer.
                        </h1>

                        <p>
                            Por ser mais rápida que outras linguagens de programação e me abrir um leque de possibilidades, como front-end, back-end e mobile, além de suas várias bibliotecas, escolhi JavaScript como minha linguagem de programação principal.
                        </p>

                        <div>
                            <button className={homecss.seeMyProjects}>
                                <a>
                                    Veja meus projetos
                                </a>
                            </button>
                        </div>
                    </div>
                    <img src="/images/lucio-magno.svg" />
                </div>

                <div>
                    <div className={homecss.stackDesktop}>
                        <a target="_blank" href="https://pt-br.reactjs.org/">
                            <Image 
                                src="/images/icons/reactjs-large.svg" 
                                width={100}
                                height={50}
                            />
                        </a>
                        <a target="_blank" href="https://nextjs.org/">
                            <img src="/images/icons/nextjs-large.svg" />
                        </a>
                        <a target="_blank" href="https://nodejs.org/en/">
                            <img src="/images/icons/nodejs-large.svg" />
                        </a>
                        <a target="_blank" href="https://expressjs.com/pt-br/">
                            <img src="/images/icons/express-large.svg" />
                        </a>
                        <a target="_blank" href="https://www.typescriptlang.org/">
                            <img src="/images/icons/typescript-large.svg" />
                        </a>
                    </div>

                    <div className={homecss.stackMobile}>
                        <a target="_blank" href="https://pt-br.reactjs.org/">
                            <img src="/images/icons/reactjs-small.svg" />
                        </a>
                        <a target="_blank" href="https://nextjs.org/">
                            <img src="/images/icons/nextjs-small.svg" />
                        </a>
                        <a target="_blank" href="https://nodejs.org/en/">
                            <img src="/images/icons/nodejs-small.svg" />
                        </a>
                        <a target="_blank" href="https://www.typescriptlang.org/">
                            <img src="/images/icons/typescript-small.svg" />
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
                <div></div>
            </footer>
        </div>
    );
}

export default HomePage;