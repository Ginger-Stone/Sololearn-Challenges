#include <iostream>
#include <string>

using namespace std;

#define AND && 

string password;
int min_length=5, max_length=10, pswd_length, digit_count=0, punct_count=0, space_count=0;

int validation(); 
int validation(){
	int count=0;
	bool check_length=pswd_length>=min_length AND pswd_length<=10;
	for(int i=0; i<=pswd_length; i++){
		if(isdigit(password[i]) ){
			digit_count++;
		}
		if(ispunct(password[i])){
			punct_count++;
		}
		if(isspace(password[i])){
			space_count++;
		}
		
	}
	if(check_length==true AND digit_count>0 AND punct_count>0 AND space_count==0){
		cout<<"\n====================="<<endl;
		cout<<"Password is valid"<<endl;
		cout<<"====================="<<endl;
	}else{
		cout<<"\n====================="<<endl;
		cout<<"Password is invalid."<<endl;
		cout<<"====================="<<endl;
		if (check_length==false)
		{
			cout<<"Ensure that your password length is 5 - 10 characters"<<endl;	
		}
		if (digit_count==0)
		{
			cout<<"Ensure that your password contains a number (1-9)"<<endl;	
		}
		if (punct_count==0)
		{
			cout<<"Ensure that your password contains a special character (!@#$%^&*()_:)"<<endl;	
		}
		if (space_count>0)
		{
			cout<<"Ensure that your password does not contain spaces"<<endl;	
		}
		
	}
	return 0;
}


int main(){

	cout<< "Enter Password" <<endl;
	getline(cin, password);
	pswd_length=password.size();

	validation();
	cout<<endl;
	
	return 0;
}
