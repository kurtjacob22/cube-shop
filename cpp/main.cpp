#include<iostream>
#include<fstream>
#include<cctype>
#include<iomanip>
using namespace std;

class account
{
	int Acc_No; // Input Student Number
	int EDate,EMonth,EYear; // Enroll Date
    int BDate,BYear; // Birth Date
    long BMonth; // Birth Month 
	char StudName[100]; // Student Size
	char Course[50]; // Student Course
	char Section[25]; // Student Section 
	int Deposit; // Deposit In Allowance
	char Type; // Input Name
	
public:
	void Create_A();	//Function to get Data from User
	
	void Show_A() const;	//Function to show Data on Screen
	
	void Modify_A();	//Function to add new Data
	
	void dep(int);	//Function to Accept Amount and dd to Balance Amount
	
	void Draw(int);	//Function to Accept Amount and Subtract from Balance Amount
	
	void Report() const;	//Function to show Data in Tabular Format
	
	int Return_Acc_No() const;	//Function to return Amount Number
	
	int ReDeposit() const;	//Function to Return Balance Amount
	
	char ReType() const;	//Function to Return Type of Account
};   

void account::Create_A() // Creating Account
{
	cout<<"ENTER STUDENT ID: ";	cin>>Acc_No;
	
	cout<<"ENTER STUDENT NAME: ";	 
	cin>>StudName;
	
	cout<<"ENTER COURSE: ";
	cin>>Course;
	
	cout<<"ENTER SECTION: ";
	cin>>Section;
	
	cout<<"ENTER DATE ENROLLED:"<<endl;
	
	cout<<"DATE : "; cin>>EDate;
	
	cout<<"MONTH: "; cin>>EMonth;
	
	cout<<"YEAR : "; cin>>EYear;
	
	cout<<"ENTER DATE OF BIRTH: "<<endl;
	
	cout<<"DATE : "; cin>>BDate;
	
	cout<<"MONTH: "; cin>>BMonth;
	
	cout<<"YEAR : "; cin>>BYear;
	
	cout<<"ENTER DEPOSIT: "; cin>>Deposit;
	
	cout<<"ACCOUNT CREATED..";
}

void account::Show_A() const // Show Student Account Information
{
	cout<<"ACCOUNT NUMBER: "<<Acc_No;
	cout<<"HOLDER NAME: ";
	cout<<StudName;
	cout<<"TYPE ACCOUNT:  "<<Type;
	cout<<"BALANCE AMOUNT: "<<Deposit;
}


void account::Modify_A() //Modify Student Account Holder
{
	cout<<"ACCOUNT NUMBER: "<<Acc_No;
	cout<<"MODIFY HOLDER NAME: ";
	cin.ignore();
	cin.getline(StudName,100);
	cout<<"MODIFY TYPE ACCOUNT: ";
	cin>>Type;
	Type=toupper(Type);
	cout<<"MODIFY BALANCE AMOUNT : ";
	cin>>Deposit;
}

	
void account::dep(int x) //Deposit The Balance 
{
	Deposit+=x;
}
	
void account::Draw(int x) // Cash Out The Remaining Balance
{
	Deposit-=x;
}
	
void account::Report() const // View Account Holder 
{
	cout<<Acc_No<<setw(10)<<" "<<StudName<<setw(10)<<" "<<EDate<<EMonth<<EYear<<setw(10)<<" "<<Deposit<<setw(6)<<endl;
}

	
int account::Return_Acc_No() const // Return To Account number
{
	return Acc_No;
}

int account::ReDeposit() const // Deposit Again
{
	return Deposit;
}

char account::ReType() const //Modifying Student Account
{
	return Type;
}

void Write_A();	//Function to Write Record in Binary File

void Display_AD(int);	//Function to Display Account Details given by user

void Modify_A(int);	//Function to Modify Record of File

void Delete_A(int);	//Function to delete Record of File

void Disp_All();		//Function to Display all Account Details

void Deposit_W(int, int); // Function to Desposit/Withdraw Amount for Given Account

void Intro();	//Introductory Screen Function

//    	THE MAIN FUNCTION OF PROGRAM

int main() // Main Front of Program 
{
	char ch; // Switch of Every Front Program
	int Num; // Declaration Of Number You've Input
	Intro();
	do
	{
		system("cls");
		cout<<"\nMAIN MENU";
		cout<<"\n01. REGISTER ACCOUNT";
		cout<<"\n02. DEP0SIT AMOUNT";
		cout<<"\n03. WITHDRAW AMOUNT";
		cout<<"\n04. BALANCE ENQUIRY";
		cout<<"\n05. ALL ACCOUNT HOLDER LIST";
		cout<<"\n06. CLOSE AN ACCOUNT";
		cout<<"\n07. MODIFY AN ACCOUNT";
		cout<<"\n08. EXIT";
		cout<<"SELECT OPTION (1-8) ";
		cin>>ch;
		system("cls");
		switch(ch)
		{
		case '1':
			Write_A();
			break;
		case '2':
			cout<<"ENTER THE ACCOUNT NUMBER: "; cin>>Num;
			Deposit_W(Num, 1);
			break;
		case '3':
			cout<<"ENTER THE ACCOUNT NUMBER: "; cin>>Num;
			Deposit_W(Num, 2);
			break;
		case '4': 
			cout<<"ENTER THE ACCOUNT NUMBER: "; cin>>Num;
			Display_AD(Num);
			break;
		case '5':
			Disp_All();
			break;
		case '6':
			cout<<"ENTER THE ACCOUNT NUMBER: "; cin>>Num;
			Delete_A(Num);
			break;
		 case '7':
			cout<<"ENTER THE ACCOUNT NUMBER: "; cin>>Num;
			Modify_A(Num);
			break;
		 case '8':
			cout<<"\nTHANK YOU FOR USING ALLOWANCE MANAGEMENT SYSTEM";
			break;
		 default :cout<<"\a";
		}
		cin.ignore();
		cin.get();
	}while(ch!='8');
	return 0;
}
void Write_A()
{
	account ac;
	ofstream outFile;
	outFile.open("account.dat",ios::binary|ios::app);
	ac.Create_A();
	outFile.write(reinterpret_cast<char *> (&ac), sizeof(account));
	outFile.close();
}
void Display_AD(int n)
{
	account ac;
	bool flag=false;
	ifstream inFile;
	inFile.open("account.dat",ios::binary);
	if(!inFile)
	{
		cout<<"FILE COULD NOT BE OPEN! PRESS ANY KEY...";
		return;
	}
	cout<<"\nBALANCE DETAILS\n"; // View Remaining Balance

    	while(inFile.read(reinterpret_cast<char *> (&ac), sizeof(account)))
	{
		if(ac.Return_Acc_No()==n)
		{
			ac.Show_A();
			flag=true;
		}
	}
	inFile.close();
	if(flag==false)
		cout<<"\n\nACCOUNT NUMBER DOES NOT EXIST"; // If You Input a not Existing Account
}
void Modify_A(int n)
{
	bool found=false;
	account ac;
	fstream File;
	File.open("account.dat",ios::binary|ios::in|ios::out);
	if(!File)
	{
		cout<<"FILE COULD NOT BE OPEN! PRESS ANY KEY...";
		return;
	}
	while(!File.eof() && found==false) // Returning into the Main front of page
	{
		File.read(reinterpret_cast<char *> (&ac), sizeof(account));
		if(ac.Return_Acc_No()==n)
		{
			ac.Show_A();
			cout<<"\nENTER NEW DETAILS OF ACCOUNT"<<endl;
			ac.Modify_A();
			int pos=(-1)*static_cast<int>(sizeof(account));
			File.seekp(pos,ios::cur);
			File.write(reinterpret_cast<char *> (&ac), sizeof(account));
			cout<<"\nRECORD UPDATED";
			found=true;
		  }
	}
	File.close();
	if(found==false)
		cout<<"\n\nRECORD NOT FOUND "; // If you put a not existing Record 
}
void Delete_A(int n) // Delete Student Account Holder
{
	account ac;
	ifstream inFile;
	ofstream outFile;
	inFile.open("account.dat",ios::binary);
	if(!inFile)
	{
		cout<<"FILE COULD NOT BE OPEN! PRESS ANY KEY...";
		return;
	}
	outFile.open("Temp.dat",ios::binary);
	inFile.seekg(0,ios::beg);
	while(inFile.read(reinterpret_cast<char *> (&ac), sizeof(account)))
	{
		if(ac.Return_Acc_No()!=n)
		{
			outFile.write(reinterpret_cast<char *> (&ac), sizeof(account));
		}
	}
	inFile.close();
	outFile.close();
	remove("account.dat");
	rename("Temp.dat","account.dat");
	cout<<"\nRECORD DELETED .."; // Deleted Student Account Holder
}
void Disp_All() // Display all the Student Account Holder
{
	account ac;
	ifstream inFile;
	inFile.open("account.dat",ios::binary);
	if(!inFile)
	{
		cout<<"FILE COULD NOT BE OPEN! PRESS ANY KEY...";
		return;
	}
	cout<<"\n\n\t\tACCOUNT HOLDER LIST\n\n";
	cout<<"ACC NO:            NAME:          ENROLLMENT:        BALANCE:\n";
	while(inFile.read(reinterpret_cast<char *> (&ac), sizeof(account)))
	{
		ac.Report();
	}
	inFile.close();
}

void Deposit_W(int n, int option) // Deposit into a non existing account
{
	int amt;
	bool found=false;
	account ac;
	fstream File;
	File.open("account.dat", ios::binary|ios::in|ios::out);
	if(!File)
	{
		cout<<"FILE COULD NOT BE OPEN! PRESS ANY KEY...";
		return;
	}
	while(!File.eof() && found==false)
	{
		File.read(reinterpret_cast<char *> (&ac), sizeof(account));
		if(ac.Return_Acc_No()==n)
		{
			ac.Show_A();
			if(option==1)
			{
				cout<<"\nTO DEPOSITE AMOUNT ";
				cout<<"\nENTER THE AMOUNT TO BE DEPOSITED:";
				cin>>amt;
				ac.dep(amt);
			}
			if(option==2) // Deposit a higher number into your remaining Balance
			{
				cout<<"\nTO WITHDRAW AMOUNT ";
				cout<<"\nENTER THE AMOUNT TO BE WITHDRAW";
				cin>>amt;
				int bal=ac.ReDeposit()-amt;
				if((bal<500 && ac.ReType()=='S') || (bal<1000 && ac.ReType()=='C'))
					cout<<"INSUFFICIENCE BALANCE";
				else
					ac.Draw(amt);
			}
			int pos=(-1)*static_cast<int>(sizeof(ac));
			File.seekp(pos,ios::cur);
			File.write(reinterpret_cast<char *> (&ac), sizeof(account));
			cout<<"\n\n\t RECORD UPDATED";
			found=true;
	       }
         }
	File.close();
	if(found==false)
		cout<<"\n\n RECORD NOT FOUND ";
}



void Intro() // First Front of the program
{
	system("Color E0");
	cout<<"\t\t\t\tPAMANTASAN NG LUNGSOD MAYNILA ALLOWANCE SYSTEM";
	cin.get();
}
