function getAllAccounts(){
	var data = {
		"phoneOneModeOfPayment": "M-PESA",
		"departmentalAccounts": "[\"Church Meeting  Account::509189\",\"Laptop  Account::508749\",\"Pen Account::512069\",\"Development Account::13825\",\"Kamungei Account::13834\",\"Children Account::351108\",\"Adventurers Account::366035\",\"Lunch Fellowship  Account::472328\",\"Camp Meeting Expenses Account::395883\",\"Laptop Account::513527\"]",
		"churchName": "Cfms",
		"conferenceName": "Cfms Project Kenya Conference",
		"districtName": "Cfms Kenya District",
		"conferenceNumber": "CFMS",
		"otherPhoneNumber": "+254775351396",
		"memberName": "Andrew Keitany",
		"isPessonnel": true,
		"groups": "[\"Moi University::1016\"]",
		"districtNumber": "CFMS1",
		"churchNumber": "29001",
		"otherPhoneModeOfPayment": "Orange Money",
		"membershipNumber": "CN3196",
		"phoneNumber": "254707981971",
		"trustFundAccounts": "[\"Conference Development Account::426234\",\"Thirteenth Sabbath Account::191295\",\"Tithe Account::127989\",\"Camp Meeting Account::127991\",\"Tithe Account::13822\",\"Camp Meeting Account::13824\",\"Combined Offerings Account::13823\",\"Combined Offerings Account::127990\"]",
		"sessionNumber": 11749295,
		"specialTrustFundAccounts": "[\"UEAB Account::457992\",\"Djibouti Mission Account::454913\"]",
		"function": "mobileRequestChurchDetails",
		"availableMeansOfPayment": "[M-PESA]",
		"status": 0
	}
	
	var account_name = "Camp Meeting Account";
	var department = "Laptop Account";
	var status = "ACTIVATED";
	var duration = "permanent";
	var priority = 7;
	
	// Trust Fund Accounts
	var request = data.departmentalAccounts;
	request = request.replace('[', '');
	request = request.replace(']', '');
	const departments = request.split(',');
	var accounts = [];
	var html = new String("");
	
	html += "<div class=\"cardHeader\">";
	html += "<h2 style=\"text-align:center;margin-top:10px;margin-bottom:10px\">Update Local Church Account</h2></div>";
	html += "<div class=\"responseDiv\" style=\"display:none;\"></div><br><hr>";
	html += "<table><form id=\"special_trust_fund_form\"><tr><td><label class=\"label_input\"><b>Account Name</b></label></td>";
	html += "<td><input type=\"text\" class=\"login_input\" id=\"account_name\" name=\"account_name\" value='"+account_name+"'></td></tr>";	html += "<tr><td><label class=\"label_input\"><b>Department</b></label></td>";
	html += "<td colspan=\"2\"><select>";
	
	for (i=0;i < departments.length; i++){
		departments[i] = departments[i].replace('"','');
		departments[i] = departments[i].replace('"','');
		departments[i] = departments[i].split("::");
		accounts.push(departments[i][0]);
	}
	
	let uniqueChars = [...new Set(accounts)];
	console.log("Unique Characters: "+uniqueChars);
	
	for (x=0;x < uniqueChars.length;x++){
		if(uniqueChars[x] == account_name){
			html += "<option value="+uniqueChars[x]+">"+ uniqueChars[x] + "</option>";
		}else{
			html += "<option value="+uniqueChars[x]+">"+ uniqueChars[x] + "</option>";
		}
	}
	html += "</select></td></tr>";
	html += "<tr>";
	html += "<td><label class=\"label_input\"><b>Priority</b></label></td>";
	html += "<td colspan=\"2\"><select>";
	for (i=0;i < 100; i++){
		if(i == priority){
			html += "<option value="+i+" selected>"+i+"</option>";
		}else{
			html += "<option value="+i+">"+i+"</option>";
		}
	}
	html += "</select></td></tr>";
	html += "<tr><td style=\"font-size:12px;\"><b>Duration</b></td>";
	if(duration == 'permanent'){
		html += "<td colspan=\"2\"><input type=\"checkbox\" class=\"login_input\" id=\"status\" name=\"status\" checked></td></tr>";
	}else{
		html += "<td colspan=\"2\"><input type=\"checkbox\" class=\"login_input\" id=\"status\" name=\"status\"></td></tr>";
	}
	
	if(status == 'ACTIVATED'){
		html += "<tr><td style=\"font-size:12px;\"><b>Status</b></td></tr>";
		html += "<tr colspan=\"2\"><td><input class=\"form-check-input\" type=\"radio\" name=\"status\" id=\"active_status\" checked>";
		html += "<label class=\"form-check-label\" for=\"church_member\">Active</label></td>";
		html += "<td><input class=\"form-check-input\" type=\"radio\" name=\"status\" id=\"inactive\">";
		html += "<label class=\"form-check-label\" for=\"church_member\">Inactive</label></td></tr>";
	}else{
		html += "<tr><td style=\"font-size:12px;\"><b>Status</b></td></tr>";
		html += "<tr colspan=\"2\"><td><input class=\"form-check-input\" type=\"radio\" name=\"status\" id=\"active_status\">";
		html += "<label class=\"form-check-label\" for=\"church_member\">Active</label></td>";
		html += "<td><input class=\"form-check-input\" type=\"radio\" name=\"status\" id=\"inactive\" checked>";
		html += "<label class=\"form-check-label\" for=\"church_member\">Inactive</label></td></tr>";
	}
	html += "<tr><td><button type=\"button\" class=\"btn\" onclick=\"getPaymentDiv2()\" id=\"payment_button2\">Save Account</button></td></tr>";
	html += "</form><tbody></table>";
	
	$("#fund_transfer").html(html);	
}