const botoesDetalhes = document.querySelectorAll(".btn-detalhes");
const mensagemDestaque = document.querySelector("#mensagem-detalhes");
const mensagemOriginal =
  'Clique em "Ver Detalhes" para obter mais informações sobre o veículo.';
let veiculoAtual = null;

function voltarMensagemOriginal() {
  mensagemDestaque.textContent = mensagemOriginal;
  veiculoAtual = null;
}

function mostrarMensagem(veiculo) {
  if (veiculo === "corolla") {
    mensagemDestaque.textContent =
      "O Toyota Corolla XEi combina elegância, conforto e tecnologia em um dos sedãs mais reconhecidos do mercado. Seu design moderno apresenta linhas sofisticadas, grade frontal imponente e acabamento refinado, proporcionando uma presença marcante em qualquer ambiente. Equipado com motor eficiente e excelente desempenho para o uso urbano e rodoviário, o Corolla XEi oferece uma condução suave, econômica e segura. O modelo conta com transmissão automática de alta precisão, garantindo conforto e praticidade durante a direção. No interior, o veículo se destaca pelo amplo espaço para passageiros, acabamento de qualidade e recursos tecnológicos que elevam a experiência ao volante. Entre os destaques estão a central multimídia com conectividade para smartphones, ar-condicionado digital, volante multifuncional e painel com informações intuitivas para o motorista.A segurança também é um dos pontos fortes do Corolla XEi, que conta com diversos sistemas de assistência à condução, múltiplos airbags, controles eletrônicos de estabilidade e tração, além de tecnologias desenvolvidas para proporcionar maior proteção aos ocupantes. O Toyota Corolla XEi é a escolha ideal para quem busca um veículo confiável, confortável e tecnológico, reunindo desempenho, economia e sofisticação em um único automóvel.";
  }
  if (veiculo === "civic") {
    mensagemDestaque.textContent =
      "O Honda Civic Sport 2026/2027 reúne design arrojado, tecnologia avançada e desempenho equilibrado, oferecendo uma experiência de condução moderna e envolvente. Com linhas esportivas, perfil aerodinâmico e detalhes exclusivos da versão Sport, o modelo transmite sofisticação e personalidade em cada detalhe.Seu conjunto mecânico foi desenvolvido para proporcionar respostas rápidas, eficiência no consumo de combustível e excelente desempenho tanto em trajetos urbanos quanto em viagens. A suspensão bem ajustada e a direção precisa garantem conforto e estabilidade, tornando cada percurso mais agradável e seguro.No interior, o Civic Sport apresenta cabine espaçosa, acabamento refinado e tecnologias voltadas para a conectividade e conveniência. O modelo conta com central multimídia de última geração, compatibilidade com smartphones, painel digital moderno e comandos intuitivos que facilitam a interação do motorista com o veículo.A segurança é outro grande destaque, com sistemas avançados de assistência à condução, controles eletrônicos de estabilidade e tração, sensores de monitoramento e diversos recursos projetados para aumentar a proteção dos ocupantes em diferentes condições de uso.O Honda Civic Sport 2026/2027 é a escolha ideal para quem busca um sedã que combine esportividade, conforto e inovação, entregando uma experiência premium com a confiabilidade reconhecida da Honda.";
  }
  if (veiculo === "tcross") {
    mensagemDestaque.textContent =
      "O VW T-Cross Highline 2026/2027 é um SUV que combina tecnologia, conforto e versatilidade, sendo ideal para quem busca um veículo moderno e preparado para diferentes estilos de vida. Seu design sofisticado apresenta linhas marcantes, detalhes exclusivos da versão Highline e uma presença imponente que se destaca tanto na cidade quanto na estrada. No interior, o modelo oferece amplo espaço para passageiros e bagagens, além de acabamento refinado e materiais de alta qualidade. A cabine conta com central multimídia avançada, painel digital, conectividade com smartphones, carregamento por indução e diversos recursos que tornam a viagem mais prática e confortável.A segurança é um dos principais diferenciais do T-Cross Highline. O veículo dispõe de sistemas modernos de assistência ao motorista, controles eletrônicos de estabilidade e tração, sensores de estacionamento, câmera de ré e tecnologias desenvolvidas para aumentar a proteção e a confiança ao dirigir. O VW T-Cross Highline 2026/2027 é a escolha perfeita para quem procura um SUV completo, unindo design moderno, tecnologia de ponta, conforto e segurança em um único veículo.";
  }
}

botoesDetalhes.forEach(function (botao) {
  botao.addEventListener("click", function (evento) {
    evento.stopPropagation();

    const veiculoSelecionado = botao.dataset.veiculo;

    if (veiculoSelecionado === veiculoAtual) {
      voltarMensagemOriginal();
      return;
    }

    mostrarMensagem(veiculoSelecionado);
    veiculoAtual = veiculoSelecionado;
  });
});

document.addEventListener("click", function () {
  voltarMensagemOriginal();
});
