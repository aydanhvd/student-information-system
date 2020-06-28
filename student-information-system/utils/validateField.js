//a function to validate submited data from auth screen
export const validateForm = (isSignUP, fields, selectedGroup) => {
	console.log();
	//if urser is tryring to log their account name must not be left empty
	if (fields.email.value.trim() === '') {
		alert('name is requred');
		return false;
	}
	//they have to provide a password
	if (fields.password.value.trim() === '') {
		alert('Password is requred');
		return false;
	}
	//if user is trying to sign up(create new acount)
	if (isSignUP) {
		//they have to provede repassword which has to mach with password itself
		if (fields.password.value !== fields.rePassword.value) {
			alert('password must match');
			return false;
		}
		//they have to choose what group they r in
		if (!selectedGroup) {
			alert('u must pick your group');
			return false;
		}
	}
	//if all of the conditions are checked the user can log in/sign up validate it
	return true;
};
//todo hadle error
