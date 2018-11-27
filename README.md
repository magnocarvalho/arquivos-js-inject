# arquivos-js-inject
arquivos utilizados para ataque de cavalo de troia a plugin Wordpress

wp-tmp.html contem codigo PHP a ser inserido no header do tema ou plugin

wp-tmp.js esta codigo JS criado para inserir diversas imagem dentro do DOM html


#O Ataque 

O ataque consiste na instalação de um tema que, sem informar,
injeta código JavaScript na página inicial da aplicação
em WordPress, onde insere um código contendo imagens
relacionadas a publicidades em formato de pop_up. Para que
o usuário administrador não perceba que a aplicação foi
infectada, será feito uma verificação a fim de identificar se
o usuário visitante possui ou não acesso administrativo.
A função utilizada para a implementação do tema infectado
é em geral simples. Primeiro será verificado se o usuário
que está acessando a hospedagem WordPress contaminada
está logado através da função is_user_logged_in() própria do
WordPress, ao mesmo tempo para minimizar os alertas aos
acessos ao site, utilizaremos a função rand() do PHP para gerar
números randômicos, de forma que a infecção seja mostrada
apenas a alguns usuários, imprimindo o JavaScript no header.
O código abaixo mostra a função descrita acima.
