'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">atlas documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-eb16311fd49f887cb7061664a2897cdf24c37d1837ebb88a5e2e92b0d572818480924bfd62a53acd0d99b9885bbf472a97ee470971b1472b3b7b628d47b99d22"' : 'data-target="#xs-components-links-module-AppModule-eb16311fd49f887cb7061664a2897cdf24c37d1837ebb88a5e2e92b0d572818480924bfd62a53acd0d99b9885bbf472a97ee470971b1472b3b7b628d47b99d22"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-eb16311fd49f887cb7061664a2897cdf24c37d1837ebb88a5e2e92b0d572818480924bfd62a53acd0d99b9885bbf472a97ee470971b1472b3b7b628d47b99d22"' :
                                            'id="xs-components-links-module-AppModule-eb16311fd49f887cb7061664a2897cdf24c37d1837ebb88a5e2e92b0d572818480924bfd62a53acd0d99b9885bbf472a97ee470971b1472b3b7b628d47b99d22"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageModule.html" data-type="entity-link" >PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageModule-f898db46245917d99b5e6c60cc3ea850cf2ac7168067b82ccd3b57a8bf5bb9c07cfd0bbcc4f60f79bc64dd383d8ed507db2ad9d66d2a8067c10280322d5dcce2"' : 'data-target="#xs-components-links-module-PageModule-f898db46245917d99b5e6c60cc3ea850cf2ac7168067b82ccd3b57a8bf5bb9c07cfd0bbcc4f60f79bc64dd383d8ed507db2ad9d66d2a8067c10280322d5dcce2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageModule-f898db46245917d99b5e6c60cc3ea850cf2ac7168067b82ccd3b57a8bf5bb9c07cfd0bbcc4f60f79bc64dd383d8ed507db2ad9d66d2a8067c10280322d5dcce2"' :
                                            'id="xs-components-links-module-PageModule-f898db46245917d99b5e6c60cc3ea850cf2ac7168067b82ccd3b57a8bf5bb9c07cfd0bbcc4f60f79bc64dd383d8ed507db2ad9d66d2a8067c10280322d5dcce2"' }>
                                            <li class="link">
                                                <a href="components/PageHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageMessageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServicesModule.html" data-type="entity-link" >ServicesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ServicesModule-9ef34b8ea34bc771398474f8c7b499d9b32ea23f457b775c44a2814a0860cef37db4d48b9779c6b7a13f6f1827bf07f3475b0c880b6b7592e16fea9f50105400"' : 'data-target="#xs-injectables-links-module-ServicesModule-9ef34b8ea34bc771398474f8c7b499d9b32ea23f457b775c44a2814a0860cef37db4d48b9779c6b7a13f6f1827bf07f3475b0c880b6b7592e16fea9f50105400"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ServicesModule-9ef34b8ea34bc771398474f8c7b499d9b32ea23f457b775c44a2814a0860cef37db4d48b9779c6b7a13f6f1827bf07f3475b0c880b6b7592e16fea9f50105400"' :
                                        'id="xs-injectables-links-module-ServicesModule-9ef34b8ea34bc771398474f8c7b499d9b32ea23f457b775c44a2814a0860cef37db4d48b9779c6b7a13f6f1827bf07f3475b0c880b6b7592e16fea9f50105400"' }>
                                        <li class="link">
                                            <a href="injectables/MessageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UtilModule.html" data-type="entity-link" >UtilModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-UtilModule-d763df9746bcadfa4891205aefc8b2a9739aa5b7ce9f94865922ecb42caed14fbe414269b7f1f3c795cba4a63f60d2074fe94b799da283b317bb8b19c3ef5a55"' : 'data-target="#xs-directives-links-module-UtilModule-d763df9746bcadfa4891205aefc8b2a9739aa5b7ce9f94865922ecb42caed14fbe414269b7f1f3c795cba4a63f60d2074fe94b799da283b317bb8b19c3ef5a55"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-UtilModule-d763df9746bcadfa4891205aefc8b2a9739aa5b7ce9f94865922ecb42caed14fbe414269b7f1f3c795cba4a63f60d2074fe94b799da283b317bb8b19c3ef5a55"' :
                                        'id="xs-directives-links-module-UtilModule-d763df9746bcadfa4891205aefc8b2a9739aa5b7ce9f94865922ecb42caed14fbe414269b7f1f3c795cba4a63f60d2074fe94b799da283b317bb8b19c3ef5a55"' }>
                                        <li class="link">
                                            <a href="directives/ZoomDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ZoomDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-UtilModule-d763df9746bcadfa4891205aefc8b2a9739aa5b7ce9f94865922ecb42caed14fbe414269b7f1f3c795cba4a63f60d2074fe94b799da283b317bb8b19c3ef5a55"' : 'data-target="#xs-pipes-links-module-UtilModule-d763df9746bcadfa4891205aefc8b2a9739aa5b7ce9f94865922ecb42caed14fbe414269b7f1f3c795cba4a63f60d2074fe94b799da283b317bb8b19c3ef5a55"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-UtilModule-d763df9746bcadfa4891205aefc8b2a9739aa5b7ce9f94865922ecb42caed14fbe414269b7f1f3c795cba4a63f60d2074fe94b799da283b317bb8b19c3ef5a55"' :
                                            'id="xs-pipes-links-module-UtilModule-d763df9746bcadfa4891205aefc8b2a9739aa5b7ce9f94865922ecb42caed14fbe414269b7f1f3c795cba4a63f60d2074fe94b799da283b317bb8b19c3ef5a55"' }>
                                            <li class="link">
                                                <a href="pipes/FilterMessagesPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterMessagesPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Credentials.html" data-type="entity-link" >Credentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Message.html" data-type="entity-link" >Message</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});