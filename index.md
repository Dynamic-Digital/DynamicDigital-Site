---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Welcome to Dynamic Digital
layout: splash

---

![Dynamic Digital Logo](/assets/images/logos/dynamic digital logo.jpg "Dynamic Digital Logo")

{{ site.description }}

<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>