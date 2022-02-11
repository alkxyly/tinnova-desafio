package com.tinnova.desafio_2;

import java.util.Arrays;
import java.util.List;

public class BubbleSort {

	public static void main(String[] args) {
		
		List<Integer> lista = Arrays.asList(5,3,2,4,7,1,0,6,8,10,9,11,13,12);
		
		int k = lista.size();
		for (int j = 0; j < k - 1; k--) {
			for (int i = 0; i < lista.size() - 1; i++) {
				Integer primeiroElemento = lista.get(i);
				Integer segundoElemento = lista.get(i + 1);			

				if(primeiroElemento > segundoElemento) {
					swap(lista, i);
				}
			} 
		}
		
		lista.forEach(numero -> System.out.print(String.format("%d ", numero)));
	}

	public static void swap(List<Integer> lista, int i) {
		Integer aux = lista.get(i);
		lista.set(i, lista.get(i + 1));
		lista.set(i + 1, aux);
	}
}
