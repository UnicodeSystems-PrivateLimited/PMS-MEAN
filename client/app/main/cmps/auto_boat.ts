import {Component, OnInit} from "angular2/core";
import {NgClass} from 'angular2/common';

@Component({
    selector: "auto-boat",
    templateUrl: "/partials/page/auto-boat",
    directives: [NgClass]
})

export class AutoBoatComponent implements OnInit {
    private client;
    public channels;
    public selChannel;
    private conUrl = "http://localhost:3000/";
    ison = true;
    constructor() { }
    ngOnInit() {
        var self=this;
        this.client = new Primus(this.conUrl);
        this.client.on('data', function(data) {
            if(data.type=='channels'){
                self.channels=data.body;
            }            
            console.log("Channels:"+JSON.stringify(data));
            //primus.write({my: 'Client data'});
        });
    }
    onSelect(channel){
       this.selChannel=channel; 
    }
   optionToggle(newSet){
       this.ison=newSet;
   }
    
}