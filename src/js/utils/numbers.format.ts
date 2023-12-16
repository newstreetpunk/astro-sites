export function phoneFormat(phone: string): String {
	const pattern = /^(\+7|8)?(\d*)/g;
	phone = phone.replace(/\D*/g, "");
	return phone.replace(pattern, "+7$2");
}

export function declOfNums(value: number, words = ['автомобиль', 'автомобиля', 'автомобилей']): String{  
    value = Math.abs(value) % 100; 
    var num = value % 10;
    if(value > 10 && value < 20) return words[2]; 
    if(num > 1 && num < 5) return words[1];
    if(num == 1) return words[0]; 
    return words[2];
}
