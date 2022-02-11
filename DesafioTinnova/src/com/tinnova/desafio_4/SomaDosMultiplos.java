package com.tinnova.desafio_4;

import java.util.stream.IntStream;

public class SomaDosMultiplos {

	public static int calcularSomaMultiplosComFor(int numero) {
		int soma = 0;
		for (int i = 1; i <= numero; i++) {
			if((i % 3 == 0)  || (i % 5 == 0)) {
				soma += i;	
			}
		}
		return soma;
	}
	
	public static int calcularSomaMultiplosComLambdas(int numero) {
		return IntStream.range(1, numero)
				.filter(n -> (n % 3 == 0)  || (n % 5 == 0))
				.reduce(0, Integer::sum);
	}
	
	public static void main(String[] args) {
		int numero = 10;
		System.out.println("M�ltiplos de 3 e 5 at� de 1 at� "+numero+ " = "+calcularSomaMultiplosComLambdas(numero));
	}
}
