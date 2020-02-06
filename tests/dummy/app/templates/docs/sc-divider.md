# sc-divider

Use `sc-divider` to distinguish portions of the UI: 
<aside>you might need to add `class="w-100"` within a flex display</aside>

{{#docs-demo as |demo|}}
  {{#demo.example name="sc-divider.hbs"}}
    <ScCheckbox @checked={{rememberMe}} @click={{action (mut rememberMe) (not rememberMe)}}>Remember me</ScCheckbox>
    {{#link-to "docs"}}
      <p>Forgot password</p>
    {{/link-to}}
  <ScDivider/>
  <p>By signing in you agree to the Kedar's Privacy Policy</p>
  {{/demo.example}}

  {{demo.snippet "sc-divider.hbs"}}
{{/docs-demo}}


Use `vertical=true` to make a vertical divider:
<aside>you might need to add `class="h-100"` within a flex display</aside>

{{#docs-demo as |demo|}}
  {{#demo.example name="sc-divider-horizontal.hbs"}}
    <div class="flex items-center justify-center h3">
      <ScMdIcon class="ph3 pointer color-gray" @icon="search" />
      <ScDivider class="h-100" @vertical={{true}}/>
      <ScMdIcon class="ph3 pointer color-gray" @icon="folder" />
    </div>
  {{/demo.example}}
  {{demo.snippet "sc-divider-horizontal.hbs"}}
{{/docs-demo}}

{{color-aside}}
