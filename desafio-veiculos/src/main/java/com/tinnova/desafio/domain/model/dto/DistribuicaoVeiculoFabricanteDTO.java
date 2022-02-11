package com.tinnova.desafio.domain.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class DistribuicaoVeiculoFabricanteDTO {
	
	private String fabricante;
	private Long totalVeiculos;
}
