package br.edu.ufersa.facefood.config;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice 
public class ApiExceptionHandler extends ResponseEntityExceptionHandler {
   
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
        MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        String mensagem = "";
    
        for (ObjectError error : ex.getBindingResult().getAllErrors()) {
            mensagem = mensagem + error.getDefaultMessage() + "\n";
        }
        return handleExceptionInternal(ex, mensagem, headers, status, request);
    }    
}