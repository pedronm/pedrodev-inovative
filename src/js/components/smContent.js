const smContentTemplate = document.createElement('template');
smContentTemplate.innerHTML = `
    <detail>
        <style>
            details {font-family: "Open Sans Light",Helvetica,Arial}
            .name {font-weight: bold; color: #217ac0; font-size: 120%}
            h4 { margin: 10px 0 -8px 0; }
            h4 span { background: #217ac0; padding: 2px 6px 2px 6px }
            h4 span { border: 1px solid #cee9f9; border-radius: 4px }
            h4 span { color: white }
            .attributes { margin-left: 22px; font-size: 90% }
            .attributes p { margin-left: 16px; font-style: italic }
            dl { margin-left: 6px; }
            dt { font-weight: bold; color: #217ac0; font-size: 110% }
            dt { font-family: Consolas, "Liberation Mono", Courier }
            dd { margin-left: 16px }
        </style>
        <summary>
            <code class="name">&lt;<slot name="element-name"></slot>&gt;</code>
            <i class="desc"><slot name="description"></slot></i>
        </summary>
        <div class="attributes">
            <h4><span>Attributes</span></h4>
            <slot name="attributes"></slot>
        </div>
    </detail>
`


/*

    https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots

    Como deve ser chamado   

    <sm-content-component>
        <span slot="element-name">slot</span>
        <span slot="description">A placeholder inside a web
            component that users can fill with their own markup,
            with the effect of composing different DOM trees
            together.</span>
        <dl slot="attributes">
            <dt>name</dt>
            <dd>The name of the slot.</dd>
        </dl>
    </sm-content-component>

*/
class SmContent extends HTMLElement{


    //Que tal criar um Base pra só estender ele?
    constructor(){
        //Sempre chamar o super no construtor
        super();
    }

    connectedCallback(){
        
        //Escrever a funcionalidades do elemento aqui
        //existem dois modos, open e closed
        //que determinam se o elemento pode ser chamado
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(smContentTemplate.content.cloneNode(true));
    }
}

customElements.define('sm-content-component', SmContent);