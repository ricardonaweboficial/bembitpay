import Numeral from "numeral";
import "numeral/locales/pt-br";
Numeral.locale("pt-br");

export const FormatToReal = (value?: number): string => {
  return Numeral(value).format(`$ 0,0.00`);
};

export const FormatToRealPrice = (value?: number): string => {
  return Numeral(value).format(`$ 0,0.00000`);
};

export const FormatToNumber = (value?: string): number => {
  return Numeral(value).value();
};

export const FormatNumberBr = (number) => {
  return number
    .replace(/\D/g, "")
    .replace(/(\d{1,2})(\d{1,5})?(\d{1,4})?/g, (txt, f, s, t) => {
      if (t) {
        return `(${f}) ${s}-${t}`;
      } else if (s) {
        return `(${f}) ${s}`;
      } else if (f) {
        return `(${f})`;
      }
    });
};

export const FormatBrithDate = (str) => {
  var m = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  return (m) ? new Date(m[3], m[2]-1, m[1]) : "0";
};

export const ValidateCpf = (cpf) => {
  cpf = cpf.replace(/[^\d]+/g,'');	
	if (cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	var add = 0;	
  let  rev = 0;
	for (let i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (let i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10))) {
		return false;	
    
  }
	return true;   
};

export const ValidateDate = (dateString) => {
    // First check for the pattern
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
};
