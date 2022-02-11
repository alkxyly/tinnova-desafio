package com.tinnova.desafio.api.exception;

import java.time.LocalDateTime;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.tinnova.desafio.domain.exception.VeiculoNaoEncontradoException;

@ControllerAdvice
public class ApiExceptionHandler {

	
	@ExceptionHandler(VeiculoNaoEncontradoException.class)
	public ResponseEntity<StandardError> veiculoNaoEncontradoException(VeiculoNaoEncontradoException ex,  HttpServletRequest request){
		var error = new StandardError(LocalDateTime.now(), HttpStatus.NOT_FOUND.value(), ex.getMessage(), request.getRequestURI());
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
	}
}
