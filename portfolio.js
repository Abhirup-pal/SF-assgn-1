function display_menu()
{
    document.getElementById('menu_expand_list').style.display='block';
}
function hide_menu()
{
    document.getElementById('menu_expand_list').style.display='none';
}
function click_to_display()
{
    let element=document.getElementById('menu_expand_list');
    if(element.style.display=='none')
        display_menu();
    else hide_menu();
}
let r = document.querySelector(':root');
    let mode = 0;
    let modepara = document.querySelectorAll('.mode_para');
    let lightlogo = document.querySelectorAll('.light_mode_logo');
    let darklogo = document.querySelectorAll('.dark_mode_logo');
    function change_mode() {
        if (mode == 0) {
            r.style.setProperty('--bgcolor', '#000');
            r.style.setProperty('--font_color', 'rgb(81, 240, 115)');
            r.style.setProperty('--text_color', '#fff');
            r.style.setProperty('--special_text', 'rgb(122, 228, 100)');
            r.style.setProperty('--shadow', 'rgb(233, 148, 92');
            mode = 1;
            modepara[0].innerHTML = "Light mode";
            modepara[1].innerHTML = "Light mode";
            darklogo[0].style.display = 'none';
            darklogo[1].style.display = 'none';
            lightlogo[0].style.display = 'inline';
            lightlogo[1].style.display = 'inline';
        }
        else {
            r.style.setProperty('--bgcolor', '#fff');
            r.style.setProperty('--font_color', 'rgb(28, 139, 28)');
            r.style.setProperty('--text_color', '#000');
            r.style.setProperty('--special_text', 'rgb(8, 73, 8)');
            r.style.setProperty('--shadow', 'rgb(8, 73, 8)');
            mode = 0;
            modepara[0].innerHTML = "Dark mode";
            modepara[1].innerHTML = "Dark mode";
            darklogo[0].style.display = 'inline';
            darklogo[1].style.display = 'inline';
            lightlogo[0].style.display = 'none';
            lightlogo[1].style.display = 'none';
        }
    }