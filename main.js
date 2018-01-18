function myFunction() {
  Logger = BetterLog.useSpreadsheet('{{spreadsheet-id}}');
  Logger.log("starting");
  var email = GmailApp.search('label:inbox is:unread from:{{inbound-email}} subject:"sendmail"');
  if (email.length > 0){
    for (var i = 0; i < email.length; i++) {
      email[i].moveToTrash();
      Logger.log("everything is normal");
    }
  }
  else {
    GmailApp.sendEmail("outbound-email", "send mail failed!", "We have recived no sendmail while checking.  Don't panic");
    Logger.log("Don't forget to bring a towel!  also, something terrible has gone wrong.");
  }
}
