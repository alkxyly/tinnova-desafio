package com.tinnova.desafio_3;

public class Fatorial {

	public int calcular(int numero) {
		return numero == 0 ? 1 : numero * calcular(numero - 1 );
	}
}
