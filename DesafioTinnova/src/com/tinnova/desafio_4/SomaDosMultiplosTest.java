package com.tinnova.desafio_4;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class SomaDosMultiplosTest {

	private static final int RESULTADO_ESPERADO = 23;

	@Test
	void test() {
		assertEquals(RESULTADO_ESPERADO, SomaDosMultiplos.calcularSomaMultiplosComLambdas(10));
	}

}
