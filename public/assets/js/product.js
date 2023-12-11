const productsList = [
  {
    id: 1,
    name: 'Cadeira Gamer Husky Gaming Tempest 500, Preto e Cinza',
    description:
      'Cadeira gamer reclinável em 120° com apoio retrátil para os pés, apoio de lombar e apoio de pescoço reguláveis. Possui características ergonomicamente amigáveis que permitem longas sessões de jogos online ou trabalho, diminuindo o desgaste físico e o cansaço.',
    price_original: '899,99',
    price: '699,99',
    img: './assets/img/products/cadeira_gamer.png',
    category: 'Cadeira Gamer',
  },
  {
    id: 2,
    name: 'Gabinete Gamer NZXT H7 Flow - Lateral em Vidro Temperado - USB 3.2 - Mid Tower - Branco - CM-H71FW-01',
    description:
      'O Gabinete H7 Flow tem painéis frontais e superiores perfurados, que permitem uma excelente circulação de ar e refrigeração do seu sistema. Você pode instalar até seis ventoinhas ou radiadores de até 360 mm na frente e no topo do gabinete, garantindo uma temperatura ideal para o seu PC. O Gabinete H7 Flow já vem com duas ventoinhas silenciosas da série F da NZXT, que proporcionam um fluxo de ar otimizado e um baixo nível de ruído.',
    price_original: '1.329,99',
    price: '1.109,99',
    img: './assets/img/products/gabinete_gamer.png',
  },
  {
    id: 3,
    name: 'Placa Mãe (Intel) ASUS Prime H510M-E DDR4 LGA1200 10° e 11° Geração',
    description:
      `Placa Mãe Asus PRIME H510M-A Recursos: <br>
      • Intel LGA 1200 soquete: Pronto para 11th e 10th Gen Intel Processadores <br>
      • Resfriamento abrangente: dissipador de calor VRM, dissipador de calor M.2, dissipador de calor PCH e Fan Xpert 2+ <br>
      • Conectividade ultrarrápida: PCIe 4.0, slot M.2 de 32 Gbps, Ethernet Intel 1 Gb e USB 3.2 Gen 1 <br>
      • Aura Sync RGB: conectores Gen 2 endereçáveis ??integrados para tiras de LED RGB, facilmente sincronizados com hardware compatível com Aura Sync.
      `,
    price_original: '999,99',
    price: '799,99',
    img: './assets/img/products/placa_mae.png',
  },
  {
    id: 4,
    name: 'SSD Kingston NV1 500GB NVMe M.2 2280 (Leitura até 3500MB/s e Gravação até 2100MB/s)',
    description:
      `- Formato: M.2 2280 <br>
      - Interface: PCIe 4.0 x4 NVMe <br>
      - Leitura sequencial: 3500MB/s <br>
      - Gravação sequencial: 2100MB/s <br>
      - Resistência (Total de bytes gravados): 320TB <br>
      - Temperatura de armazenamento: -40ºC a 85ºC <br>
      - Temperatura de operação: 0ºC a 70ºC <br>
      - Vibração em operação: 2.17G (7-800HZ) <br>
      - Vibração fora de operação: 20G (20-1000Hz) <br>
      - MTBF: 1.500.000 horas <br>
      - Dimensões: 22 x 80 x 2,2mm <br>
      - Peso: 7g <br>
      - Garantia: 3 anos.
      `,
    price_original: '219,49',
    price: '179,99',
    img: './assets/img/products/ssd500gb.png',
  },
  {
    id: 5,
    name: 'Processador AMD Ryzen 7 5700G 3,80GHz, 8-Core, 16MB, AM4',
    description: `ULTRA DINÂMICO<br>
    Obtenha um PC com o desempenho de que você precisa, com até 8 núcleos alimentados pela tecnologia de núcleo de processador de 7 nm mais avançada do mundo.1 Com esses processadores oferecendo um salto de geração em desempenho em relação à geração anterior, 2 os processadores AMD Ryzen™ Série 5000 G Desktop com Radeon™ Graphics proporcionam capacidade de resposta ultra-rápida e desempenho multithread para PCs convencionais.<br><br>
    
    A MAIS AVANÇADA TECNOLOGIA<br>
    Confie em um PC que é rápido, eficiente e confiável, com a mais avançada tecnologia1 de núcleo de processador de 7nm do mundo, no coração do seu sistema. Os processadores para desktop AMD Ryzen™ Série 5000 G com gráficos Radeon™ apresentam a tecnologia de processador "Zen 3" de 7nm, líder do mercado, que permite um processador mais rápido e eficiente, para que tudo possa ser feito mais rápido que nunca, com operação refrigerada e silenciosa.<br><br>
    
    OS GRÁFICOS MAIS RÁPIDOS DO MUNDO EM UM PROCESSADOR PARA DESKTOP.<br>
    Mergulhe em todos os detalhes ao editar fotos e vídeos, obter jogos em HD incrivelmente suaves e transmitir seus programas favoritos vibrantes em 4KR HD. Os processadores para desktop AMD Ryzen™ Série 5000 G fornecem o desempenho gráfico mais rápido, disponível em um processador3 para desktop com os gráficos AMD Radeon™ integrados. Desfrute de um jogo 1080P suave instantaneamente, sem a necessidade de uma placa gráfica adicional; e uma maneira fácil para as futuras atualizações, como placas gráficas para jogos HD+ quando você estiver pronto.<br><br>
    
    ARQUITETURA "ZEN 3" DE 7NM<br>
    O núcleo de processador mais rápido do mundo para os processadores de jogos mais rápidos do mundo.<br><br>
    
    Especificações:<br>
    Nº de núcleos de CPU: 8<br>
    Nº de threads: 16<br>
    Nº de núcleos de GPU: 8<br>
    Clock básico: 3.8GHz<br>
    Clock de Max Boost: Até 4.6GHz<br>
    Total de Cache L2: 4MB<br>
    Cachê L3 total: 16MB<br>
    Desbloqueado: Sim<br>
    CMOS: TSMC 7nm FinFET<br>
    Pacote: AM4<br>
    Versão PCI Express: PCIe® 3.0<br>
    Solução térmica: Wraith Stealth<br>
    TDP / TDP Padrão: 65W<br>
    cTDP: 45-65W<br>
    Temperatura máx: 95°C<br>
    Memória:<br>
    Velocidade máxima da memória: Até 3200MHz<br>
    Tipo de memória: DDR4<br>
    Canais de memória: 2<br>
    Adaptador gráfico integrado:<br>
    Frequência gráfica: 2000 MHz<br>
    Modelo gráfico: Radeon Graphics<br>
    Contagem de núcleos gráficos: 8<br>
    Principais recursos:<br>
    <br>
    Display Port<br>
    <br>
    HDMI<br>
    <br>
    GTIN: 730143313377
    `,
    price_original: '1.299,99',
    price: '1.499,99',
    img: './assets/img/products/ryzen5700.png',
  },
  {
    id: 6,
    name: 'Processador Intel Core I7-11700k, 8 Core 16 Threads, Rocket Lake 11ª Geração, Cache 16mb, 3.6ghz (5.0ghz Max. Turbo), Lga 1200, Intel Uhd Graphics 750 - BX8070811700K',
    description: `- Modelo:<br>
    BX8070811700K<br><br>
    
    - Especificações:<br>
    Intel Core i7-11700K<br>
    11° Geração<br>
    Socket: 1200<br>
    Frequência Base: 3.6 GHz<br>
    Frequência Core Turbo: Até 4.9 Ghz<br>
    Intel Smart Cache: 16MB<br>
    Núcleos: 8<br>
    Threads: 16<br>
    TDP: 125W<br>
    Unlocked<br>
    PCIe Gen 4.0 Support<br><br>
    
    - Compatibilidade Chipset:<br>
    Compatível com placas-mãe baseadas em chipsets da série 500 e selecionadas da série 400*<br><br>
    
    - Gráficos:<br>
    Intel ® UHD Graphics 750<br><br>
    
    - Memória:<br>
    Compatiblidade: DDR4<br>
    Suporte para memórias de velocidade: 3200 / 2933<br><br>
    
    - Recursos:<br>
    Intel® Turbo Boost Max Technology 3.0<br>
    Turbo Frequency (GHz): Até 5.0 Ghz<br><br>
    
    - Conteúdo da embalagem:<br>
    1 x Processador Intel Core i7-11700K<br><br>
    
    - Garantia<br>
    12 meses. (9 meses de garantia contratual junto ao fabricante + 3 meses referentes à garantia legal, nos termos do artigo 26, II, do Código de Defesa do Consumidor).
    
    `,
    price_original: '1.642,16',
    price: '2.099,99',
    img: './assets/img/products/i7-11700k.png',
  },
  {
    id: 7,
    name: 'SSD M.2 Patriot 2TB 2280 PCIe Gen3 x4 Nvme 1.3 P300 - P300P2TBM28',
    description:
      `O P300 é a próxima geração de SSD PCIe Gen3 x4 NVMe intermediário da Patriot, entrando no mercado e oferecendo velocidades de transferência e IOPs 25% maiores do que as soluções PCIe 3 x2 padrão.<br><br>

      O formato compacto M.2 foi projetado para fácil instalação, compatível com qualquer PC ou laptop, enquanto seu baixo consumo de energia auxilia a prolongar a vida útil do driver, garantindo melhora no tempo de inicialização, carregamento e transferência em relação às unidades de disco rígido tradicionais.<br><br>
      
      O firmware avançado do P300 oferece tecnologia ECC e proteção ao encaminhar dados de ponta a ponta, garantindo a integridade dos dados durante a vida útil da unidade. Recursos avançados de nivelamento de desgaste e gerenciamento térmico prolongam ao máximo a sua durabilidade.<br><br>
      
      Aumente o desempenho do seu computador com agilidade no carregamento de aplicativos para uma experiência geral e produtiva, enquanto transfere arquivos pesados sem tempo de atraso. A Patriot oferece um dos SSDs com melhor custo-benefício do mercado.
      `,
    price: '799,99',
    img: './assets/img/products/ssd2tb.png',
  },
  {
    id: 8,
    name: 'Monitor Gamer 24" AOC Viper 165Hz, Full HD, 1ms, sRGB, HDMI/DisplayPort/VGA',
    description: `Velocidade<br>
    Com o monitor Viper 24 seus movimentos serão ainda mais incríveis e sua experiência de jogo muito mais confortável. Tudo isso graças à tela de 24", recursos que reduzem a fadiga ocular e desempenho ultrarrápido de 165Hz e 1ms.<br><br>
    
    Taxa de Atualização de 165Hz<br>
    Experimente uma jogabilidade impecável com a taxa de atualização de 165Hz, sem rastros e efeitos fantasmas.<br><br>
    
    1ms de Tempo de Resposta<br>
    Tenha em sua casa um monitor gamer com tempo de resposta de 1ms e aproveite um desempenho excepcional.<br><br>
    
    AMD Freesync Premium Pro<br>
    O AMD FreeSync Premium Pro sincroniza a taxa de atualização da placa de vídeo e do monitor para eliminar a ocorrência de rupturas na imagem e travamentos.<br><br>
    
    Painel VA (178°/178°)<br>
    Com o Painel VA você tem mais brilho e contraste para enxergar onde os seus inimigos estão, mesmo em cenas com pouca iluminação.<br><br>
    
    Conexões DisplayPort, HDMI E VGA<br>
    Com o HDMI você tem variedade de entretenimento com um único cabo, sem perder a qualidade. Conecte o seu monitor gamer a outros dispositivos em tempo real com a conexão VGA e tenha ainda mais qualidade de imagem e som em seus jogos com a conexão DisplayPort, que já vem com cabo incluso.<br><br>
    
    Modo Mira<br>
    Melhore a precisão e a velocidade das suas jogadas graças ao recurso modo mira: uma mira vermelha posicionada no centro da tela para você se tornar o melhor atirador da partida.<br><br>
    
    Shadow Control<br>
    Este diferencial controla os níveis de cinza no menu do monitor para melhorar a relação de contraste em telas escuras e proporcionar as melhores cenas, sempre.<br><br>
    
    Flicker-Free e Low Blue Light<br>
    As horas de jogatina vão ficar muito mais confortáveis com este monitor gamer! Proteja sua visão com a tecnologia Flicker-free, que reduz a cintilação da tela sem sacrificar a qualidade das imagens, e diminua a fadiga ocular com o recurso Low Blue Light, que reduz a luz azul prejudicial aos olhos.<br><br>
    
    ESPECIFICAÇÕES TÉCNICAS<br><br>
    
    Tela<br>
    Tamanho: 24"<br>
    Brilho: 350 cd/m²<br>
    Resolução: Full HD (1920 x 1080)<br>
    Contraste Estático: 3.000:1<br>
    Contraste Dinâmico: 80.000.000:1<br>
    Suporte de Cores: 16.7 milhões<br>
    Tempo de Resposta: 1ms<br>
    sRGB: 125,95%<br>
    HDR: HDR Mode<br><br>
    
    Portas<br>
    - 2x Portas HDMI 2.0<br>
    - 1x Porta DisplayPort 1.2<br>
    - 1x Porta VGA<br>
    - 1x Porta P2 (saída de áudio)<br><br>
    
    Ergonomia e Instalação<br>
    Ângulo de visão (horizontal/vertical): 178º / 178º<br>
    Ajuste de inclinação: 5° / 23°<br>
    Montagem em parede: Sim, VESA 100 x 100 mm<br><br>
    
    Alimentação<br>
    Tipo de Fonte: Adaptador externo Bivolt (100~240V - 50/60Hz)<br><br>
    
    Dimensões com suporte: 53,9 x 42,1 x 22,74 cm<br>
    Dimensões sem suporte: 53,9 x 32,2 x 4,72 cm<br>
    Peso com suporte: 4,62 kg<br>
    Peso sem suporte: 3,75 kg
    `,
    price_original: '986,06',
    price: '1.049,00',
    img: './assets/img/products/monitor-gamer-aoc.png',
  },
];
