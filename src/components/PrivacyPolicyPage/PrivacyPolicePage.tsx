import styles from "./PrivacyPolicyPage.module.css"
import {Container} from "../Container/Container.tsx";
import {PolicyPageText} from "../PolicyPageText/PolicyPageText.tsx";
import {BottomWarningMessageComponent} from "../BottomWarningMessageComponent/BottomWarningMessageComponent.tsx";


export const PrivacyPolicePage = () => {
    return (
        <>
            <section className={styles.provicyPolicePage}>
                <Container>
                    <div>
                        <h1 className={styles.h1}>POLÍTICA DE PRIVACIDADE</h1>
                        <div className={styles.textBlock}>
                            <PolicyPageText
                                h2={"COLETA DE INFORMAÇÕES PESSOAIS"}
                                p1="Coletamos diferentes tipos de informações pessoais sobre você quando você usa nosso site,
                            incluindo:"
                                p2="Informações que você nos fornece: podem incluir seu nome, endereço de e-mail, número de telefone, informações demográficas e outros dados que você nos fornece ao se registrar em nosso site, criar uma conta, jogar ou entrar em contato com o atendimento ao cliente.
                                Informações que coletamos automaticamente: Quando você usa nosso site, coletamos automaticamente certas informações sobre seu dispositivo e sua atividade, incluindo seu endereço IP, tipo de navegador, sistema operacional, data e hora de sua visita, páginas que você visualiza e as ações que você realiza. Em nosso site.
                                Informações de cookies e outras tecnologias de rastreamento: Usamos cookies e outras tecnologias de rastreamento para coletar informações sobre sua atividade em nosso Site. Usamos cookies para diversos fins, incluindo melhorar sua experiência de usuário, rastrear sua atividade em nosso Site e fornecer-lhe informações direcionadas. anúncio."
                            />
                            <PolicyPageText
                                h2={"USO DE INFORMAÇÕES PESSOAIS"}
                                p1="Usamos suas informações pessoais para os seguintes fins:"
                                p2="Fornecimento e melhoria dos nossos serviços: Utilizamos as suas informações pessoais para lhe fornecer os nossos serviços, incluindo acesso aos jogos, processamento das suas apostas e pagamento dos seus ganhos. Também utilizamos suas informações pessoais para melhorar nossos serviços e desenvolver novos recursos e produtos.
                                Entrando em contato com você: Poderemos usar suas informações pessoais para contatá-lo sobre sua conta, nossos serviços ou outros fins relacionados ao nosso negócio.
                                Personalização da sua experiência: Podemos usar suas informações pessoais para personalizar sua experiência em nosso Site, inclusive para fornecer recomendações e ofertas de jogos direcionadas.
                                Publicidade: Podemos usar suas informações pessoais para mostrar publicidade direcionada em nosso site e em outros sites.
                                Finalidades de pesquisa: Podemos usar suas informações pessoais para fins de pesquisa para entender melhor nossos usuários e melhorar nossos serviços."
                            />
                            <PolicyPageText
                                h2={"DIVULGAÇÃO DE INFORMAÇÕES PESSOAIS"}
                                p1="Poderemos divulgar suas informações pessoais a terceiros nos seguintes casos:"
                                p2="Provedores de serviços: podemos divulgar suas informações pessoais a terceiros que nos prestam serviços, como processamento de pagamentos, atendimento ao cliente e marketing.
                                Requisitos legais: Poderemos divulgar suas informações pessoais se formos obrigados a fazê-lo por lei ou por um mandado legal ou ação legal.
                                Proteção dos nossos direitos: Poderemos divulgar as suas informações pessoais se acreditarmos que é necessário para proteger os nossos direitos ou propriedade."
                            />
                            <PolicyPageText
                                h2={"ARMAZENAMENTO E PROTEÇÃO DE SUAS INFORMAÇÕES PESSOAIS"}
                                p2="Tomamos medidas para proteger suas informações pessoais contra acesso, uso, divulgação, alteração ou destruição não autorizados. Retemos as suas informações pessoais apenas durante o tempo necessário para cumprir os fins para os quais foram recolhidas ou para cumprir as nossas obrigações legais."
                            />
                        </div>
                    </div>
                </Container>
            </section>
            <BottomWarningMessageComponent />
        </>

    );
};
