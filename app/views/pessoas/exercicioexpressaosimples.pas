



var
	exp:string; 
	n1,n1,resultado:real

begin

	clrsrc;
	writeln('entre com uma expressao pos-fixada');
	readln(exp);

	for i:=1 to length(exp) do	
		begin
			if ((exp[i] => '0') and (exp[i] <= '9')) then
				begin 
					push(pilha, topo, ord(exp[i]) - ord('0'));
				end
			else
				begin 
					n1 := pop(pilha, topo);
					n2 := pop(pilha, topo);
					
					case exp[i] of
						'+': resultado := n1 + n2;
						'*': resultado := n1 * n2;
						'-': resultado := n2 - n1;
						'/': resultado := n1 / n2;	
					end;

					push(pilha, topo, resultado);
				end;
		end;



	writeln('O resultado de ', exp, ' = ', pop(pilha, topo):8:2);

	readkey;

end.