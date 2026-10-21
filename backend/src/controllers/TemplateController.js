const { buscarLivros } = require("../services/bookService");

const listarLivros = async (req, res) => {
  try {
    const livros = await buscarLivros();

    return res.status(200).json(livros);
  } catch (error) {
    return res.status(500).json({
      error: "Erro ao buscar livros",
    });
  }
};

module.exports = { listarLivros };

/*
 * CÓDIGOS DE STATUS HTTP
 *
 * 1xx — INFORMATIVOS
 * 100 - Continue: continuar enviando a requisição.
 * 101 - Switching Protocols: troca de protocolo.
 * 102 - Processing: requisição em processamento.
 * 103 - Early Hints: informações antecipadas ao cliente.
 *
 * 2xx — SUCESSO
 * 200 - OK: requisição realizada com sucesso.
 * 201 - Created: recurso criado com sucesso.
 * 202 - Accepted: requisição aceita, processamento pendente.
 * 203 - Non-Authoritative Information: informações modificadas por intermediário.
 * 204 - No Content: sucesso sem conteúdo na resposta.
 * 205 - Reset Content: cliente deve redefinir o formulário ou visualização.
 * 206 - Partial Content: retorno de parte do conteúdo solicitado.
 * 207 - Multi-Status: múltiplos resultados de operações.
 * 208 - Already Reported: recurso já informado anteriormente.
 * 226 - IM Used: resposta com modificações incrementais aplicadas.
 *
 * 3xx — REDIRECIONAMENTO
 * 300 - Multiple Choices: múltiplas representações disponíveis.
 * 301 - Moved Permanently: recurso movido permanentemente.
 * 302 - Found: redirecionamento temporário.
 * 303 - See Other: consultar resultado em outra URL.
 * 304 - Not Modified: recurso não modificado; permite reutilizar cache.
 * 305 - Use Proxy: uso de proxy (obsoleto).
 * 306 - Unused: código reservado.
 * 307 - Temporary Redirect: redirecionamento temporário mantendo o método.
 * 308 - Permanent Redirect: redirecionamento permanente mantendo o método.
 *
 * 4xx — ERROS DO CLIENTE
 * 400 - Bad Request: requisição inválida ou malformada.
 * 401 - Unauthorized: autenticação necessária ou inválida.
 * 402 - Payment Required: reservado para uso relacionado a pagamentos.
 * 403 - Forbidden: acesso não autorizado ao recurso.
 * 404 - Not Found: recurso não encontrado.
 * 405 - Method Not Allowed: método HTTP não permitido.
 * 406 - Not Acceptable: formato de resposta solicitado não disponível.
 * 407 - Proxy Authentication Required: autenticação no proxy necessária.
 * 408 - Request Timeout: tempo limite da requisição excedido.
 * 409 - Conflict: conflito com o estado atual do recurso.
 * 410 - Gone: recurso removido permanentemente.
 * 411 - Length Required: cabeçalho de tamanho obrigatório.
 * 412 - Precondition Failed: condição exigida não foi atendida.
 * 413 - Content Too Large: conteúdo enviado excede o limite.
 * 414 - URI Too Long: URL maior que o permitido.
 * 415 - Unsupported Media Type: formato do conteúdo não suportado.
 * 416 - Range Not Satisfiable: intervalo solicitado inválido.
 * 417 - Expectation Failed: expectativa da requisição não atendida.
 * 418 - I'm a Teapot: código humorístico definido em RFC.
 * 421 - Misdirected Request: requisição direcionada ao servidor incorreto.
 * 422 - Unprocessable Content: dados compreensíveis, mas semanticamente inválidos.
 * 423 - Locked: recurso bloqueado.
 * 424 - Failed Dependency: falha devido à dependência de outra operação.
 * 425 - Too Early: servidor não aceita processar a requisição antecipadamente.
 * 426 - Upgrade Required: atualização de protocolo necessária.
 * 428 - Precondition Required: requisição exige uma condição prévia.
 * 429 - Too Many Requests: limite de requisições excedido.
 * 431 - Request Header Fields Too Large: cabeçalhos grandes demais.
 * 451 - Unavailable For Legal Reasons: recurso indisponível por razões legais.
 *
 * 5xx — ERROS DO SERVIDOR
 * 500 - Internal Server Error: erro interno inesperado.
 * 501 - Not Implemented: funcionalidade ou método não implementado.
 * 502 - Bad Gateway: resposta inválida de servidor intermediário.
 * 503 - Service Unavailable: serviço temporariamente indisponível.
 * 504 - Gateway Timeout: servidor intermediário excedeu o tempo de espera.
 * 505 - HTTP Version Not Supported: versão HTTP não suportada.
 * 506 - Variant Also Negotiates: erro de negociação de conteúdo.
 * 507 - Insufficient Storage: armazenamento insuficiente.
 * 508 - Loop Detected: loop detectado no processamento.
 * 510 - Not Extended: extensões adicionais exigidas (obsoleto).
 * 511 - Network Authentication Required: autenticação de rede necessária.
 */