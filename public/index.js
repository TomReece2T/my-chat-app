
// import converse from "@converse/headless/converse-core";
// const { Promise, Strophe, dayjs, sizzle, _, $build, $iq, $msg, $pres } = converse.env;

document.addEventListener("DOMContentLoaded", function () {

  converse.initialize({
    bosh_service_url: 'https://conversejs.org/http-bind/', // Please use this connection manager only for testing purposes
    view_mode: 'fullscreen',
    jid: 'tomreece2t@chat.sum7.eu',
    password: 'passw0rd',
    auto_login: true,
    whitelisted_plugins: ['security-labels'],
    debug: true
  });

  converse.plugins.add("security-labels", {
    dependencies: [],

    initialize() {
      const _converse = this._converse;

      console.log("Security Labels plugin is initialized!");
      _converse.log.log("Security Labels plugin is initialized!");

      _converse.on('connected', function () {

        _converse.api.listen.on('getToolbarButtons', (toolbar_el, buttons) => {
          console.log('do something to toolbar buttons, toolbar_el, buttons', toolbar_el, buttons)
          const mybutton = document.createElement('button');
          mybutton.id = 'mybutton';
          mybutton.textContent = 'Mark as SECRET';
          mybutton.onclick = function() {
            console.log('you made a message SECRET')
            alert('you made a message SECRET')
          }
          buttons.push(mybutton);
          return buttons;
        });

        _converse.api.listen.on('getOutgoingMessageAttributes', (chat, attrs) => {
          console.log('1. on getOutgoingMessageAttributes, chat, attrs', attrs);
          const newAttrs = {...attrs}
          newAttrs['body'] = '[SECRET] ' + newAttrs['body']
          // newAttrs['is_headline'] = false

      //     newAttrs['securitylabel'] = `
      //     <securitylabel xmlns="urn:xmpp:sec-label:0">
      //         <displaymarking>CONFIDENTIAL</displaymarking>
      //         <esssecuritylabel>
      //             <classification>1</classification>
      //             <category>Test</category>
      //         </esssecuritylabel>
      //     </securitylabel>
      // `;

          console.log('sending message with newAttrs', newAttrs)

          return newAttrs
        });

        // _converse.api.listen.on('createMessageStanza', (chat, data) => {
        //   console.log('1. createMessageStanza chat, data:', chat, data);

        //   const securityLabel = data['message']['attributes']['securitylabel']

        //   let newData = {...data}
        //   newData['stanza']['node']['_testproperty'] = 'abc'
        

        //   console.log('2. createMessageStanza chat, data:', chat, newData);
        //   return newData;
        // });

      })

    },

  });

});