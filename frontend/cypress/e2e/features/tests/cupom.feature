  Scenario: O usuário deve poder adicionar um cupom com sucesso
    Given o usuário está na página de admparcerias
    When o usuário preenche o campo "Nome" com "CUPOM"
    And o usuário preenche o campo "Desconto" com "10%"
    And clica no botão "Add Coupon"
    Then o usuário é redirecionado para a página de parcerias

  Scenario: O usuário não consegue adicionar um cupom
    Given o usuário está na página de admparcerias
    And já existe um cupom com nome "CUPOM"
    When o usuário preenche o campo "Nome" com "CUPOM"
    And o usuário preenche o campo "Desconto" com "10%"
    And clica no botão "Add Coupon"
    Then uma mensagem de "alert" aparece na tela com a mensagem "Cupom já existente"

  Scenario: O usuário deleta um cupom
    Given o usuário está na página de meuscupoms
    And já existe um cupom com nome "CUPOM"
    When o usuário clica no botão "Delete" relacionado a tal cupom
    Then o cupom é removido da lista de cupoms 

  Scenario: O usuário atualiza um cupom
    Given o usuário está na página de meuscupoms
    And já existe um cupom com nome "CUPOM"
    When o usuário clica no botão "Edit" relacionado a tal cupom
    And o usuário preenche "Nome" com "Breno"
    And o usuário preenche "Desconto" com 20
    Then o cupom atualizado é demonstrado na tela 

  





