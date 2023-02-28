package br.edu.ufersa.facefood.config;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice // Indica que a classe trata exceções em toda a aplicação
public class ApiExceptionHandler extends ResponseEntityExceptionHandler {
    // Sobrescreve o método handleMethodArgumentNotValid da classe ResponseEntityExceptionHandler
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
        MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        String mensagem = "";
        // Itera sobre todos os erros encontrados pela validação
        for (ObjectError error : ex.getBindingResult().getAllErrors()) {
            // Adiciona a mensagem de erro no atributo mensagem
            mensagem = mensagem + error.getDefaultMessage() + "\n";
        }
        // Retorna a mensagem de erro como resposta ao cliente
        return handleExceptionInternal(ex, mensagem, headers, status, request);
    }    
}

/*
 Este é um exemplo de classe Java que é responsável por lidar com exceções de validação de argumentos na API. 
 Esta classe estende a classe ResponseEntityExceptionHandler do Spring Framework, que fornece vários métodos para
 lidar com exceções que ocorrem ao processar uma solicitação.
 Aqui, temos um método sobrescrito handleMethodArgumentNotValid que é chamado quando uma exceção do tipo 
 MethodArgumentNotValidException é lançada. Este método recebe os seguintes parâmetros:
 ex: a exceção lançada
 headers: os cabeçalhos HTTP da resposta
 status: o código HTTP da resposta
 request: o objeto WebRequest que representa a solicitação recebida
 Este método então itera sobre todos os erros de validação encontrados na exceção e concatena todas as mensagens de erro
  em uma única string, separando-as por quebras de linha. Finalmente, a mensagem de erro é retornada como a resposta ao 
  cliente. Note que a classe está anotada com @ControllerAdvice, que indica que a classe é um controlador de exceções 
  para toda a aplicação. Isso significa que os métodos desta classe serão chamados sempre que ocorrer uma exceção em 
  qualquer controlador dentro da aplicação.
*/
 