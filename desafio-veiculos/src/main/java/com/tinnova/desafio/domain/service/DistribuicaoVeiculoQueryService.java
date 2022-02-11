package com.tinnova.desafio.domain.service;

import java.util.List;

import com.tinnova.desafio.domain.model.dto.DistribuicaoVeiculoDTO;
import com.tinnova.desafio.domain.model.dto.DistribuicaoVeiculoFabricanteDTO;

public interface DistribuicaoVeiculoQueryService {

	List<DistribuicaoVeiculoDTO> consultarDistribuicaoVeiculoPorAno();
	
	List<DistribuicaoVeiculoFabricanteDTO> consultarDistribuicaoVeiculoPorFabricante();
}
