// export const submintHandler = (fields, group, isSignUp, signUp, logIn) => {
// 	//temperary ganna go
// 	const email = fields.email.value.trim();
// 	const pass = fields.password.value.trim();
// 	const userName = fields.userName.value.trim();
// 	const name = fields.name.value.trim();
// 	//temperary ganna go
// 	let className;
// 	if (group < 3) {
// 		className = `MD-${group}`;
// 	} else {
// 		className = `BE-${group}`;
// 	}
// 	if (validateForm(isSignUp, fields, group)) {
// 		if (isSignUp) {
// 			signUp(email, name, userName, pass, className);
// 		} else {
// 			logIn(email, pass);
// 		}
// 	}
// };

//a function to validate submited data from auth screen
export const validateForm = (isSignUP, email, password, rePassword, userName, name, selectedGroup) => {
	//if urser is tryring to log their account name must not be left empty
	if (email.trim() === '') {
		alert('name is required');
		return false;
	}
	//they have to provide a password
	if (password.trim() === '') {
		alert('Password is required');
		return false;
	}
	//if user is trying to sign up(create new acount)
	if (isSignUP) {
		//they have to provede repassword which has to mach with password itself
		if (password.trim() !== rePassword.trim()) {
			alert('Passwords must match');
			return false;
		}
		//they have to choose what group they r in
		if (!selectedGroup) {
			alert('u must pick your group');
			return false;
		}
		if (password.trim().length < 8) {
			alert('Password should be included at least 8 characters');
			return false;
		}
		if (userName.trim() === '') {
			alert('userName required');
			return false;
		}
		if (userName.trim().toUpperCase() === '') {
			alert('Username must be written with lowercase');
			return false;
		}
		if (name.trim() === '') {
			alert('name is required');
			return false;
		}
	}
	//if all of the conditions are checked the user can log in/sign up validate it
	return true;
};
//todo handle error
