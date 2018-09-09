import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import kbc from './kbc.png'
import check from './sbi1.png'
import check2 from './sbi2.png'
import check3 from './sbi3.png'
import check4 from './sbi4.png'
import check5 from './sbi5.png'
import check6 from './sbi6.png'
import check7 from './sbi7.png'
import check8 from './sbi8.png'
import check9 from './sbi9.png'
import check10 from './sbi10.png'
import check11 from './sbi11.png'
import check12 from './sbi12.png'
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom'

import '../node_modules/font-awesome/css/font-awesome.min.css'
var firebase=require("firebase")
var uuid=require("uuid")
var config = {
    apiKey: "AIzaSyB20eC8AULheFT7QFXScpnrMC5aqk05nuE",
    authDomain: "cismox-e3ba1.firebaseapp.com",
    databaseURL: "https://cismox-e3ba1.firebaseio.com",
    projectId: "cismox-e3ba1",
    storageBucket: "cismox-e3ba1.appspot.com",
    messagingSenderId: "238998483800"
  };
  firebase.initializeApp(config);
class Darshit extends React.Component{
constructor()
{
	super();
	this.state={
		answers:{
			answer1:"",
			answer2:"",
			answer3:"",
			answer4:"",
			answer5:"",
			answer6:"",
			answer7:"",
			answer8:"",
			answer9:"",
			answer10:"",
			answer11:"",
			answer12:"",
			answer13:"",
		},
		isSubmitted:"false",
		textsubmit:"",
		dummytext:"",
		dummyanswer:"",
		answerlkm:"",
		money:[],
		uid:uuid.v1(),
	}
	this.click=this.click.bind(this);
	this.clickme=this.clickme.bind(this);
	this.dummyanswer=this.dummyanswer.bind(this);
	this.answer=this.answer.bind(this);
	this.answer2=this.answer2.bind(this);
	this.answer3=this.answer3.bind(this);
	this.answer4=this.answer4.bind(this);
	this.answer5=this.answer5.bind(this);
	this.answer6=this.answer6.bind(this);
	this.answer7=this.answer7.bind(this);
	this.answer8=this.answer8.bind(this);
	this.answer9=this.answer9.bind(this);
	this.answer10=this.answer10.bind(this);
	this.answer11=this.answer11.bind(this);
	this.answer12=this.answer12.bind(this);
}
click(enb)
{
	this.setState({
		dummytext:enb.target.value,
	})
}
clickme()
{
	var dummy=this.state.dummytext;
	this.setState({
		textsubmit:dummy,
		isSubmitted:"true"
	})
}




dummyanswer(event)
{
	this.setState({
		dummyanswer:event.target.value
	})
}
answer()
{
	var answerlkm=this.state.answers;
	var dummyanswer=this.state.dummyanswer;
	answerlkm.answer1=dummyanswer;
	this.setState({
		answerlkm:dummyanswer
	})
	if(this.state.answers.answer1=="A")
	{
		this.setState({
			money:5000
		})
	}
	firebase.database().ref("cismox/"+this.state.uid).set({
		name:this.state.textsubmit,
	})

}

answer2()
{
	var answerlkm=this.state.answers;
	var dummyanswer=this.state.dummyanswer;
	answerlkm.answer2=dummyanswer;
	this.setState({
		answerlkm:dummyanswer
	})
	if(this.state.answers.answer2=="B")
	{
		this.setState({
			money:10000
		})
	}
firebase.database().ref("cismox/"+this.state.uid).set({
		name:this.state.textsubmit,
	})


}

answer3()
{
	var answerlkm=this.state.answers;
	var dummyanswer=this.state.dummyanswer;
	answerlkm.answer3=dummyanswer;
	this.setState({
		answerlkm:dummyanswer
	})
	if(this.state.answers.answer3=="B")
	{
		this.setState({
			money:20000
		})
	}
	firebase.database().ref("cismox/"+this.state.uid).set({
		name:this.state.textsubmit,
	})

}

answer4()
{
	var answerlkm=this.state.answers;
	var dummyanswer=this.state.dummyanswer;
	answerlkm.answer4=dummyanswer;
	this.setState({
		answerlkm:dummyanswer
	})
	if(this.state.answers.answer4=="B")
	{
		this.setState({
			money:40000
		})
	}
	firebase.database().ref("cismox/"+this.state.uid).set({
		name:this.state.textsubmit,
	})

}

answer5()
{
	var answerlkm=this.state.answers;
	var dummyanswer=this.state.dummyanswer;
	answerlkm.answer5=dummyanswer;
	this.setState({
		answerlkm:dummyanswer
	})
	if(this.state.answers.answer5=="B")
	{
		this.setState({
			money:80000
		})
	}
firebase.database().ref("cismox/"+this.state.uid).set({
		name:this.state.textsubmit,
	})

}

answer6()
{
	var answerlkm=this.state.answers;
	var dummyanswer=this.state.dummyanswer;
	answerlkm.answer6=dummyanswer;
	this.setState({
		answerlkm:dummyanswer
	})
	if(this.state.answers.answer6=="B")
	{
		this.setState({
			money:160000
		})
	}
firebase.database().ref("cismox/"+this.state.uid).set({
		name:this.state.textsubmit,
	})

}
answer7()
{
	var answerlkm=this.state.answers;
	var dummyanswer=this.state.dummyanswer;
	answerlkm.answer7=dummyanswer;
	this.setState({
		answerlkm:dummyanswer
	})
	if(this.state.answers.answer7=="B")
	{
		this.setState({
			money:320000
		})
	}
firebase.database().ref("cismox/"+this.state.uid).set({
		name:this.state.textsubmit,
	})

}
answer8()
{
	var answerlkm=this.state.answers;
	var dummyanswer=this.state.dummyanswer;
	answerlkm.answer8=dummyanswer;
	this.setState({
		answerlkm:dummyanswer
	})
	if(this.state.answers.answer8=="A")
	{
		this.setState({
			money:640000
		})
	}
firebase.database().ref("cismox/"+this.state.uid).set({
		name:this.state.textsubmit,
	})

}
answer9()
{
	var answerlkm=this.state.answers;
	var dummyanswer=this.state.dummyanswer;
	answerlkm.answer9=dummyanswer;
	this.setState({
		answerlkm:dummyanswer
	})
	if(this.state.answers.answer9=="B")
	{
		this.setState({
			money:1250000
		})
	}
firebase.database().ref("cismox/"+this.state.uid).set({
		name:this.state.textsubmit,
	})

}
answer10()
{
	var answerlkm=this.state.answers;
	var dummyanswer=this.state.dummyanswer;
	answerlkm.answer10=dummyanswer;
	this.setState({
		answerlkm:dummyanswer
	})
	if(this.state.answers.answer10=="A")
	{
		this.setState({
			money:2500000
		})
	}
firebase.database().ref("cismox/"+this.state.uid).set({
		name:this.state.textsubmit,
	})

}
answer11()
{
	var answerlkm=this.state.answers;
	var dummyanswer=this.state.dummyanswer;
	answerlkm.answer11=dummyanswer;
	this.setState({
		answerlkm:dummyanswer
	})
	if(this.state.answers.answer11=="C")
	{
		this.setState({
			money:5000000
		})
	}
firebase.database().ref("cismox/"+this.state.uid).set({
		name:this.state.textsubmit,
	})

}
answer12()
{
	var answerlkm=this.state.answers;
	var dummyanswer=this.state.dummyanswer;
	answerlkm.answer12=dummyanswer;
	this.setState({
		answerlkm:dummyanswer
	})
	if(this.state.answers.answer12=="B")
	{
		this.setState({
			money:10000000
		})
	}
firebase.database().ref("cismox/"+this.state.uid).set({
		name:this.state.textsubmit,
	})

}
	render()
	{
		var homepage;
		var secondpage;
		var thirdpage;
		if(this.state.isSubmitted=="false" && this.state.textsubmit=="")
		{
			homepage=<form>
					<div class="alert  mnb">
						<h1 class="text text-white lk">Kon banega karorpati</h1>
						<p class="text-white text-right">-present By cismox</p>
					</div>
					<div class="container">		
						<input type="text" class="kbc" onChange={this.click}/>
						<br/>
						<br/>
						<button class="btn btn-primary kmn" disabled={this.state.dummytext?false:true} onClick={this.clickme}>click</button>
					</div>
					<br/>
					<br/>
						<img src={kbc} class="img-fluid"/>
					</form>
		}




















		else if (this.state.answers.answer1.length>0) {
			if(this.state.answers.answer1=="A")
				{thirdpage=<div>
 							<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी Congratulations आपने 5000/- जीता यदि आप अधिक चेक बनाना चाहते हैं तो Back बटन पर क्लिक करें</h1>
							</div>
								<p class="cheque">{this.state.textsubmit}</p><img src={check} class="img-fluid"/>
								<br/><br/>
								
								<Link exact to="/kk" class="btn primary">Back</Link>
				</div>}
			else{thirdpage=<div>
				<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी आप खेल में हार गये सही जवाब है पश्चिम बंगाल</h1>
							</div>
			</div>}		
		}


		else if (this.state.answers.answer2.length>0) {
			if(this.state.answers.answer2=="B")
				{thirdpage=<div>
 							<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी Congratulations आपने 10,000/- जीता यदि आप अधिक चेक बनाना चाहते हैं तो Back बटन पर क्लिक करें</h1>
							</div>
								<p class="cheque">{this.state.textsubmit}</p><img src={check2} class="img-fluid"/>
								<Link exact to="/kk2" class="btn primary">Back</Link>
				
				</div>}
			else{thirdpage=<div>
				<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी आप खेल में हार गये सही जवाब है विक्रमादित्य</h1>
							</div>
			</div>}		
		}


		else if (this.state.answers.answer3.length>0) {
			if(this.state.answers.answer3=="C")
				{thirdpage=<div>
 							<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी Congratulations आपने 20,000/- जीता यदि आप अधिक चेक बनाना चाहते हैं तो Back बटन पर क्लिक करें</h1>
							</div>
								<p class="cheque">{this.state.textsubmit}</p><img src={check3} class="img-fluid"/>
								<Link exact to="/kk3" class="btn primary">Back</Link>
				
				</div>}
			else{thirdpage=<div>
				<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी आप खेल में हार गये सही जवाब है पोर्टब्लेयर</h1>
							</div>
			</div>}		
		}

		else if (this.state.answers.answer4.length>0) {
			if(this.state.answers.answer4=="A")
				{thirdpage=<div>
 							<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी Congratulations आपने 40,000/- जीता यदि आप अधिक चेक बनाना चाहते हैं तो Back बटन पर क्लिक करें</h1>
							</div>
								<p class="cheque">{this.state.textsubmit}</p><img src={check4} class="img-fluid"/>
								<Link exact to="/kk4" class="btn primary">Back</Link>
				
				</div>}
			else{thirdpage=<div>
				<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी आप खेल में हार गये सही जवाब है फिरदौसी</h1>
							</div>
			</div>}		
		}

		else if (this.state.answers.answer5.length>0) {
			if(this.state.answers.answer5=="A")
				{thirdpage=<div>
 							<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी Congratulations आपने 80,000/- जीता यदि आप अधिक चेक बनाना चाहते हैं तो Back बटन पर क्लिक करें</h1>
							</div>
								<p class="cheque">{this.state.textsubmit}</p><img src={check5} class="img-fluid"/>
								<Link exact to="/kk5" class="btn primary">Back</Link>
				
				</div>}
			else{thirdpage=<div>
				<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी आप खेल में हार गये सही जवाब है इसकी अत्यधिक ठण्डी जलवायु के लिए</h1>
							</div>
			</div>}		
		}

		else if (this.state.answers.answer6.length>0) {
			if(this.state.answers.answer6=="A")
				{thirdpage=<div>
 							<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी Congratulations आपने 1,60,000/- जीता यदि आप अधिक चेक बनाना चाहते हैं तो Back बटन पर क्लिक करें</h1>
							</div>
								<p class="cheque">{this.state.textsubmit}</p><img src={check6} class="img-fluid"/>
								<Link exact to="/kk6" class="btn primary">Back</Link>
				
				</div>}
			else{thirdpage=<div>
				<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी आप खेल में हार गये सही जवाब है पश्चिम बंगाल</h1>
							</div>
			</div>}		
		}

		
		else if (this.state.answers.answer7.length>0) {
			if(this.state.answers.answer7=="B")
				{thirdpage=<div>
 							<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी Congratulations आपने 3,20,000/- जीता यदि आप अधिक चेक बनाना चाहते हैं तो Back बटन पर क्लिक करें</h1>
							</div>
								<p class="cheque">{this.state.textsubmit}</p><img src={check7} class="img-fluid"/>
								<Link exact to="/kk7" class="btn primary">Back</Link>
				
				</div>}
			else{thirdpage=<div>
				<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी आप खेल में हार गये सही जवाब है Paintings</h1>
							</div>
			</div>}		
		}


		else if (this.state.answers.answer8.length>0) {
			if(this.state.answers.answer8=="A")
				{thirdpage=<div>
 							<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी Congratulations आपने 6,40,000/- जीता यदि आप अधिक चेक बनाना चाहते हैं तो Back बटन पर क्लिक करें</h1>
							</div>
								<p class="cheque">{this.state.textsubmit}</p><img src={check8} class="img-fluid"/>
								<Link exact to="/kk8" class="btn primary">Back</Link>
				
				</div>}
			else{thirdpage=<div>
				<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी आप खेल में हार गये सही जवाब है मालीगांव</h1>
							</div>
			</div>}		
		}		


		else if (this.state.answers.answer9.length>0) {
			if(this.state.answers.answer9=="B")
				{thirdpage=<div>
 							<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी Congratulations आपने 12,50,000/- जीता यदि आप अधिक चेक बनाना चाहते हैं तो Back बटन पर क्लिक करें</h1>
							</div>
								<p class="cheque">{this.state.textsubmit}</p><img src={check9} class="img-fluid"/>
								<Link exact to="/kk9" class="btn primary">Back</Link>
								
				</div>}
			else{thirdpage=<div>
				<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी आप खेल में हार गये सही जवाब है शम्स-उद-दिन इल्तुतमिश</h1>
							</div>
			</div>}		
		}


		else if (this.state.answers.answer10.length>0) {
			if(this.state.answers.answer10=="A")
				{thirdpage=<div>
 							<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी Congratulations आपने 25,00,000 जीता यदि आप अधिक चेक बनाना चाहते हैं तो Back बटन पर क्लिक करें</h1>
							</div>
								<p class="cheque">{this.state.textsubmit}</p><img src={check10} class="img-fluid"/>
								<Link exact to="/kk10" class="btn primary">Back</Link>
				
				</div>}
			else{thirdpage=<div>
				<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी आप खेल में हार गये सही जवाब है नेकचंद्र</h1>
							</div>
			</div>}		
		}


		else if (this.state.answers.answer11.length>0) {
			if(this.state.answers.answer11=="C")
				{thirdpage=<div>
 							<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी Congratulations आपने 50,00,000/- जीता यदि आप अधिक चेक बनाना चाहते हैं तो Back बटन पर क्लिक करें</h1>
							</div>
								<p class="cheque">{this.state.textsubmit}</p><img src={check11} class="img-fluid"/>
								<Link exact to="/kk11" class="btn primary">Back</Link>
				
				</div>}
			else{thirdpage=<div>
				<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी आप खेल में हार गये सही जवाब है मराठो द्वारा</h1>
							</div>
			</div>}		
		}



		else if (this.state.answers.answer12.length>0) {
			if(this.state.answers.answer12=="B")
				{thirdpage=<div>
 							<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी Congratulations YOU WON 1 CRORE RUPESS</h1>
							</div>
								<p class="cheque">{this.state.textsubmit}</p><img src={check12} class="img-fluid"/>
								<Link exact to="/kk12" class="btn primary">Back</Link>
				
				</div>}
			else{thirdpage=<div>
				<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी आप खेल में हार गये सही जवाब है David Coulthard</h1>
							</div>
			</div>}		
		}


		
		


















	else if(this.state.isSubmitted=="true" && this.state.textsubmit!=""){
			secondpage=<div>
 							<div class="alert  mnb">
								<h1 class="text text-white lk">{this.state.textsubmit}जी आपका स्वागत है कौन बनेगा करोड़पति में</h1>
								<p class="text-white text-right">-present By cismox(Mr.Darshit Gajjar startup)</p>
							</div>
							<div class="container">
								<div>
								<form>
									<p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
									<ul class="list-group">
                                                1) भारत के किस राज्य सर्वाधिक चावल उत्पादन होता है?
                                                <li class="list-group-item"><br/>A: पश्चिम बंगाल&nbsp;<input type="radio" name="answer1" value="A" onChange={this.dummyanswer}/></li>

                                                <li class="list-group-item">B: दिल्ली&nbsp;<input type="radio" name="answer1" value="B" onChange={this.dummyanswer}/></li>
                                                <li class="list-group-item">C: असम&nbsp;<input type="radio" name="answer1" value="C" onChange={this.dummyanswer}/></li>
                                                <br/>
                                                <p><i class="fa fa-inr float-left" aria-hidden="true">5,000</i></p>
                                    </ul>	
                                    		<button type="button" class="btn btn-primary" onClick={this.answer}>Lock kiya jaye</button>
                                            </p>
                                    </form>
								</div>
							</div>
							<div class="container">
								<div>
									<p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
									<ul class="list-group">
                                                2) चीनी यात्री फाह्यान किसके काल में भारत आया था? 
                                                <li class="list-group-item"><br/>A: महाकवि कालिदास&nbsp;<input type="radio" name="answer2" value="A" onChange={this.dummyanswer}/></li>

                                                <li class="list-group-item">B: विक्रमादित्य&nbsp;<input type="radio" name="answer2" value="B"onChange={this.dummyanswer}/></li>
                                                <li class="list-group-item">C: क्षोभ मण्डल&nbsp;<input type="radio" name="answer2" value="C" onChange={this.dummyanswer}/></li>
                                                <br/>
                                                <p><i class="fa fa-inr float-left" aria-hidden="true">10,000</i></p>
                                    </ul>
                                    		<button type="button" class="btn btn-primary" onClick={this.answer2}>Lock kiya jaye</button>

                                            </p>
								</div>
							</div>

							<div class="container">
								<div>
									<p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
									<ul class="list-group">
                                                3) संघ शासित प्रदेश अंडमान निकोबार द्वीप समूह की राजधानी कौन सी राज्य है। 
                                                <li class="list-group-item"><br/>A: असम &nbsp;<input type="radio" name="answer3" value="A" onChange={this.dummyanswer}/></li>

                                                <li class="list-group-item">B: दिल्ली&nbsp;<input type="radio" name="answer3" value="B" onChange={this.dummyanswer}/></li>
                                                <li class="list-group-item">C: पोर्टब्लेयर&nbsp;<input type="radio" name="answer3" value="C" onChange={this.dummyanswer}/></li>
                                                <br/>
                                                <p><i class="fa fa-inr float-left" aria-hidden="true" >20,000</i></p>
                                    </ul>
                                    		<button type="button" class="btn btn-primary" onClick={this.answer3}>Lock kiya jaye</button>

                                            </p>
								</div>
							</div>

							<div class="container">
								<div>
									<p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
									<ul class="list-group">
                                                4) ‘शाहनामा’ किसकी कृति है? 
                                                <li class="list-group-item"><br/>A: फिरदौसी&nbsp;<input type="radio" name="answer4" value="A" onChange={this.dummyanswer}/></li>

                                                <li class="list-group-item">B: महाकवि कालिदास&nbsp;<input type="radio" name="answer4" value="B" onChange={this.dummyanswer}/></li>
                                                <li class="list-group-item">C: ख्वाजा मोईनुद्दीन चिस्ती&nbsp;<input type="radio"  value="C" name="answer4" onChange={this.dummyanswer}/></li>
                                                <br/>
                                                <p><i class="fa fa-inr float-left" aria-hidden="true">40,000</i></p>
                                    </ul>
                                    		<button type="button" class="btn btn-primary" onClick={this.answer4}>Lock kiya jaye</button>

                                            </p>
								</div>
							</div>

							<div class="container">
								<div>
									<p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
									<ul class="list-group">
                                                5) रूस में साइबेरिया पूरे विश्व में किस लिए प्रसिद्ध है?
                                                <li class="list-group-item"><br/>A: इसकी अत्यधिक ठण्डी जलवायु के लिए&nbsp;<input type="radio" name="answer5" value="A" onChange={this.dummyanswer}/></li>

                                                <li class="list-group-item">B: बीच के लिए&nbsp;<input type="radio" name="answer5" value="B" onChange={this.dummyanswer}/></li>
                                                <li class="list-group-item">C: इसकी अत्यधिक उष्ण जलवायु के लिए&nbsp;<input type="radio"  value="C" name="answer5" onChange={this.dummyanswer}/></li>
                                                <br/>
                                                <p><i class="fa fa-inr float-left" aria-hidden="true">80,000</i></p>
                                    </ul>
                                    		<button type="button" class="btn btn-primary" onClick={this.answer5}>Lock kiya jaye</button>

                                            </p>
								</div>
							</div>

							<div class="container">
								<div>
									<p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
									<ul class="list-group">
                                                6) भारत के किस राज्य सर्वाधिक चावल उत्पादन होता है 
                                                <li class="list-group-item"><br/>A: पश्चिम बंगाल&nbsp;<input type="radio" name="answer6" value="A" onChange={this.dummyanswer}/></li>

                                                <li class="list-group-item">B: दिल्ली&nbsp;<input type="radio" name="answer6" value="B" onChange={this.dummyanswer}/></li>
                                                <li class="list-group-item">C: असम&nbsp;<input type="radio" name="answer6" value="C" onChange={this.dummyanswer}/></li>
                                                <br/>
                                                <p><i class="fa fa-inr float-left" aria-hidden="true">1,60,000</i></p>
                                    </ul>
                                    		<button type="button" class="btn btn-primary" onClick={this.answer6}>Lock kiya jaye</button>

                                            </p>
								</div>
							</div>

							<div class="container">
								<div>
									<p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
									<ul class="list-group">
                                                7) “Mithila” and “Madhubani” are also names of which kind of folk art?
OPTI 
                                                <li class="list-group-item"><br/>A: Embroidery&nbsp;<input type="radio" value="A" onChange={this.dummyanswer} name="answer7"/></li>

                                                <li class="list-group-item">B: Paintings&nbsp;<input type="radio"  value="B" onChange={this.dummyanswer} name="answer7"/></li>
                                                <li class="list-group-item">C: Handicraft&nbsp;<input type="radio" value="C" onChange={this.dummyanswer} name="answer7"/></li>
                                                <br/>
                                                <p><i class="fa fa-inr float-left" aria-hidden="true">3,20,000</i></p>
                                    </ul>
                                    		<button type="button" class="btn btn-primary" onClick={this.answer7}>Lock kiya jaye</button>

                                            </p>
								</div>
							</div>

							<div class="container">
								<div>
									<p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
									<ul class="list-group">
                                                8) पूर्वोत्तर सीमान्त रेलवे का मुख्यालय कहाँ है? 
                                                <li class="list-group-item"><br/>A: मालीगांव&nbsp;<input type="radio" value="A" onChange={this.dummyanswer}name="answer8"/></li>

                                                <li class="list-group-item">B: तिनसुकिया&nbsp;<input type="radio" value="B" onChange={this.dummyanswer}name="answer8"/></li>
                                                <li class="list-group-item">C: लामडिंग&nbsp;<input type="radio" value="C" onChange={this.dummyanswer} name="answer8"/></li>
                                                <br/>
                                                <p><i class="fa fa-inr float-left" aria-hidden="true">6,40,000</i></p>
                                    </ul>
                                    		<button type="button" class="btn btn-primary" onClick={this.answer8}>Lock kiya jaye</button>

                                            </p>
								</div>
							</div>

							<div class="container">
								<div>
								<p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
									<ul class="list-group">
                                                9) दिल्ली की सुल्तान रजिया सुल्तान किसकी पुत्री थी? 
                                                <li class="list-group-item"><br/>A: ख्वाजा मोईनुद्दीन चिस्ती&nbsp;<input type="radio" value="A" onChange={this.dummyanswer} name="answer9"/></li>

                                                <li class="list-group-item">B: शम्स-उद-दिन इल्तुतमिश&nbsp;<input type="radio" value="B"onChange={this.dummyanswer} name="answer9"/></li>
                                                <li class="list-group-item">C: फखरुद्दीन अली अहमद&nbsp;<input type="radio" value="C"onChange={this.dummyanswer} name="answer9"/></li>
                                                <br/>
                                                <p><i class="fa fa-inr float-left" aria-hidden="true">12,50,000</i></p>
                                    </ul>
                                    		<button type="button" class="btn btn-primary" onClick={this.answer9}>Lock kiya jaye</button>

                                            </p>
								</div>
							</div>

							<div class="container">
								<div>
									<p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
									<ul class="list-group">
                                                10) चंडीगढ़ का रॉक गार्डन (शैल उद्यान) किसने बनाया था?
                                                <li class="list-group-item"><br/>A: नेकचंद्र&nbsp;<input type="radio" value="A" name="answer10" onChange={this.dummyanswer}/></li>

                                                <li class="list-group-item">B:  डॉ. राजेन्द्र प्रसाद&nbsp;<input type="radio" value="B" name="answer10"onChange={this.dummyanswer}/></li>
                                                <li class="list-group-item">C: तेनजिंग नोर्गे&nbsp;<input type="radio" value="C" name="answer10" onChange={this.dummyanswer}/></li>
                                                <br/>
                                                <p><i class="fa fa-inr float-left" aria-hidden="true">25,00,000</i></p>
                                    </ul>
                                    		<button type="button" class="btn btn-primary" onClick={this.answer10}>Lock kiya jaye</button>

                                            </p>
								</div>
							</div>

							<div class="container">
								<div>
									<p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
									<ul class="list-group">
                                                11)  चौथ नामक कर किसके द्वारा लिया जाता था?
                                                <li class="list-group-item"><br/>A: अकबर द्वारा&nbsp;<input type="radio" value="A" onChange={this.dummyanswer} name="answer11"/></li>

                                                <li class="list-group-item">B: मुग़ल द्वारा&nbsp;<input type="radio" value="B" onChange={this.dummyanswer} name="answer11"/></li>
                                                <li class="list-group-item">C: मराठो द्वारा&nbsp;<input type="radio" value="C"  onChange={this.dummyanswer} name="answer11"/></li>
                                                <br/>
                                                <p><i class="fa fa-inr float-left" aria-hidden="true">50,00,000</i></p>
                                    </ul>
                                    		<button type="button" class="btn btn-primary" onClick={this.answer11}>Lock kiya jaye</button>

                                            </p>
								</div>
							</div>


							<div class="container">
								<div>
									<p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
									<ul class="list-group">
                                                12)Which British Formula 1 racing driver survived a Learjet crash in May 2000?
                                                <li class="list-group-item"><br/>A: Stanley Ipkiss&nbsp;<input type="radio" value="A" onChange={this.dummyanswer} name="answer12"/></li>

                                                <li class="list-group-item">B: David Coulthard&nbsp;<input type="radio" value="B" onChange={this.dummyanswer} name="answer12"/></li>
                                                <li class="list-group-item">C: Carl Fogarty&nbsp;<input type="radio" value="C" onChange={this.dummyanswer} name="answer12"/></li>
                                                <br/>
                                                <p><i class="fa fa-inr float-left" aria-hidden="true">1 crore</i></p>
                                    </ul>
                                    		<button type="button" class="btn btn-primary" onClick={this.answer12}>Lock kiya jaye</button>

                                            </p>
								</div>
							</div>


							
					   </div>
		}
		return(
				<div>
					{homepage}	
					{secondpage}
					{thirdpage}
				</div>
		);
	}
}



ReactDOM.render(
	<Router>
    <div>
        <Route exact path="/" component={Darshit}/>
        <Route exact path="/kk" component={Darshit}>
        	<Darshit/>
        </Route>
        <Route exact path="/kk2" component={Darshit}>
        	<Darshit/>
        </Route>
        <Route exact path="/kk3" component={Darshit}>
        	<Darshit/>
        </Route>
        <Route exact path="/kk4" component={Darshit}>
        	<Darshit/>
        </Route>
        <Route exact path="/kk5" component={Darshit}>
        	<Darshit/>
        </Route>
        <Route exact path="/kk6" component={Darshit}>
        	<Darshit/>
        </Route>
        <Route exact path="/kk7" component={Darshit}>
        	<Darshit/>
        </Route>
        <Route exact path="/kk8" component={Darshit}>
        	<Darshit/>
        </Route>
        <Route exact path="/kk9" component={Darshit}>
        	<Darshit/>
        </Route>
        <Route exact path="/kk10" component={Darshit}>
        	<Darshit/>
        </Route>
        <Route exact path="/kk11" component={Darshit}>
        	<Darshit/>
        </Route>
        <Route exact path="/kk12" component={Darshit}>
        	<Darshit/>
        </Route>


    </div>
</Router>
	,document.getElementById("root"))  