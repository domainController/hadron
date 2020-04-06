const tickets = [
    {
        "url": "https://admintestpatrice.zendesk.com/api/v2/tickets/1.json",
        "id": 1,
        "external_id": null,
        "via": {
            "channel": "sample_ticket",
            "source": {
                "from": { },
                "to": { },
                "rel": null
            }
        },
        "created_at": "2020-03-30T10:59:05Z",
        "updated_at": "2020-03-30T10:59:09Z",
        "type": "incident",
        "subject": "Exemple de ticket : Voici le ticket",
        "raw_subject": "Exemple de ticket : Voici le ticket",
        "description": "Bonjour Patrice,\n\nC’est votre premier ticket. Super ! Toute demande client envoyée à vos canaux d’assistance (e-mail, chat, messagerie vocale, formulaire Web et tweet) devient un ticket Support comme celui-ci. Répondez à ce ticket en tapant un message au-dessus et en cliquant sur Envoyer. Vous pouvez aussi voir comment un e-mail devient un ticket en envoyant un e-mail à votre nouveau compte, support@admintestpatrice.zendesk.com. Votre ticket s’affichera dans les vues de ticket.\n",
        "priority": "normal",
        "status": "open",
        "recipient": null,
        "requester_id": 371502661217,
        "submitter_id": 371275811438,
        "assignee_id": 371275811438,
        "organization_id": null,
        "group_id": 360002166418,
        "collaborator_ids": [ ],
        "follower_ids": [ ],
        "email_cc_ids": [ ],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [
            "exemple",
            "support",
            "zendesk"
        ],
        "custom_fields": [ ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [ ],
        "fields": [ ],
        "followup_ids": [ ],
        "brand_id": 360000827178,
        "allow_channelback": false,
        "allow_attachments": true,
        "generated_timestamp": 1585565949
    },
    {
        "url": "https://admintestpatrice.zendesk.com/api/v2/tickets/2.json",
        "id": 2,
        "external_id": null,
        "via": {
            "channel": "api",
            "source": {
                "from": { },
                "to": { },
                "rel": null
            }
        },
        "created_at": "2020-03-30T15:06:55Z",
        "updated_at": "2020-03-30T15:06:55Z",
        "type": null,
        "subject": "My printer is on fire!",
        "raw_subject": "My printer is on fire!",
        "description": "The smoke is very colorful.",
        "priority": null,
        "status": "open",
        "recipient": null,
        "requester_id": 371275811438,
        "submitter_id": 371275811438,
        "assignee_id": 371275811438,
        "organization_id": 360253050498,
        "group_id": 360002166418,
        "collaborator_ids": [ ],
        "follower_ids": [ ],
        "email_cc_ids": [ ],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [ ],
        "custom_fields": [ ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [ ],
        "fields": [ ],
        "followup_ids": [ ],
        "brand_id": 360000827178,
        "allow_channelback": false,
        "allow_attachments": true,
        "generated_timestamp": 1585580815
    },
    {
        "url": "https://admintestpatrice.zendesk.com/api/v2/tickets/3.json",
        "id": 3,
        "external_id": null,
        "via": {
            "channel": "web",
            "source": {
                "from": { },
                "to": { },
                "rel": null
            }
        },
        "created_at": "2020-03-30T22:47:59Z",
        "updated_at": "2020-03-30T22:47:59Z",
        "type": "incident",
        "subject": "Error 422 in Chrome console for createManyTickets.js",
        "raw_subject": "Error 422 in Chrome console for createManyTickets.js",
        "description": "https://develop.zendesk.com/hc/en-us/articles/360001069927#create_users\n\nfor(x=0; x<20; x++) {\n  var title = \"Ticket #\" + x;\n  var subject = \"Test ticket #\" + x;\n  var body = \"This is test ticket #\" + x;\n  $.ajax({\n    url: '/api/v2/tickets.json',\n    contentType:'application/json',\n    type: 'POST',\n    data: JSON.stringify({\"ticket\": {\"subject\": subject , \"comment\": { \"body\": \"commentaire\" }}})\n  });\n}",
        "priority": "low",
        "status": "open",
        "recipient": null,
        "requester_id": 371569660478,
        "submitter_id": 371275811438,
        "assignee_id": 371275811438,
        "organization_id": null,
        "group_id": 360002166418,
        "collaborator_ids": [ ],
        "follower_ids": [ ],
        "email_cc_ids": [ ],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [ ],
        "custom_fields": [ ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [ ],
        "fields": [ ],
        "followup_ids": [ ],
        "brand_id": 360000827178,
        "allow_channelback": false,
        "allow_attachments": true,
        "generated_timestamp": 1585608479
    },
    {
        "url": "https://admintestpatrice.zendesk.com/api/v2/tickets/4.json",
        "id": 4,
        "external_id": null,
        "via": {
            "channel": "web",
            "source": {
                "from": { },
                "to": { },
                "rel": null
            }
        },
        "created_at": "2020-03-31T15:35:19Z",
        "updated_at": "2020-03-31T15:35:19Z",
        "type": null,
        "subject": "Error: Cannot find module 'jsdom' for `node createManyTickets.js`",
        "raw_subject": "Error: Cannot find module 'jsdom' for `node createManyTickets.js`",
        "description": "cat createManyTickets.js\nvar $ = require('jQuery');\n\nfor(x=0; x<20; x++) {\n  var title = \"Ticket #\" + x;\n  var subject = \"Test ticket #\" + x;\n  var body = \"This is test ticket #\" + x;\n  $.ajax({\n    url: '/api/v2/tickets.json',\n    contentType:'application/json',\n    type: 'POST',\n    data: JSON.stringify({\"ticket\": {\"subject\": subject , \"comment\": { \"body\": \"commentaire\" }}})\n  });\n}\n\n// <script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js\"></script>",
        "priority": null,
        "status": "open",
        "recipient": null,
        "requester_id": 371275811438,
        "submitter_id": 371275811438,
        "assignee_id": 371275811438,
        "organization_id": 360253050498,
        "group_id": 360002166418,
        "collaborator_ids": [ ],
        "follower_ids": [ ],
        "email_cc_ids": [ ],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [ ],
        "custom_fields": [ ],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [ ],
        "fields": [ ],
        "followup_ids": [ ],
        "brand_id": 360000827178,
        "allow_channelback": false,
        "allow_attachments": true,
        "generated_timestamp": 1585668919
    }
];

function getTickets() {
	setTimeout(() => {
		let ouput = '';
		tickets.forEach((ticket, index) => {
			output += `<li>${tickets.subject}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

getTickets();
