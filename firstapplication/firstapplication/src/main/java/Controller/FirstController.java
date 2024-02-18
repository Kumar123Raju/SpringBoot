package Controller;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;

@Component
public class FirstController {

    @RequestMapping("/index")
    public String index(){
        return "index";
    }


}
